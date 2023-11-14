// @ts-check
'use strict';

import { readdir, readFile, rm, mkdir, writeFile } from 'node:fs/promises';

/**
 * @typedef {object} ComponentContent
 * @property {string} html
 * @property {string} js
 * @property {string} css
 */

(async () => {
    try {
        // READ COMPONENTS
        const components = await getContent('components');

        // READ VIEWS
        const views = await getContent('views');

        // UPDATE IMPORTS INSIDE VIEWS AND COMPONENTS
        updateImportsPaths(views);
        updateImportsPaths(components);

        await createIndexFile(views, components)
        await copyAllScripts();
        
        // copy styles
        await mkdir('./dist/styles');
        await copyFile('main.css', './src/styles', './dist/styles');

        await mkdir('./dist/assets');
        await copyAssets();
    } catch(errorBuildingApplication) {
        console.log('ERROR!')
        console.error(errorBuildingApplication);
    }
})()

/**
 * Reads components in src/components and return their html/js/css
 * @param {string} folder
 * @returns {Promise<Object.<string, ComponentContent>|undefined>}
 */
async function getContent(folder) {
    /** @type {Object.<string, ComponentContent>} */
    const content = {};
    const contentFolders = await readdir(`./src/${folder}`);
    for(const contentFolder of contentFolders) {
        console.log(`Reading files from folder ${contentFolder}`);
        let html;
        try {
            html = await readFile(`./src/${folder}/${contentFolder}/template.html`, 'utf-8');
        } catch(errorGettingComponentHtml) {
            console.error(`Missing template for component ${contentFolder}`);
            console.error(errorGettingComponentHtml);
            return;
        }

        let js;
        try {
            js = await readFile(`./src/${folder}/${contentFolder}/script.js`, 'utf-8');
        } catch(errorGettingComponentScript) {
            console.error(`Missing script for component ${contentFolder}`);
            console.error(errorGettingComponentScript);
            return;
        }

        let css;
        try {
            css = await readFile(`./src/${folder}/${contentFolder}/style.css`, 'utf-8');
        } catch(errorGettingComponentStyle) {
            console.error(`Missing style for component ${contentFolder}`);
            console.error(errorGettingComponentStyle);
            return;
        }

        content[contentFolder] = {
            html: html,
            js: js,
            css: css,
        };
    }

    return content;
}

/**
 * get content of a component
 * @param {Object.<string, ComponentContent>} components
 * @param {ComponentContent} parentComponent
 * @returns {string}
 */
function getComponentsContent(components, parentComponent) {
    let parentComponentHtml = parentComponent.html;
    let component = parentComponentHtml.match(/c-\S*/);
    while(component) {
        parentComponentHtml = parentComponentHtml.replace(`<${component} />`, getComponentsContent(components, components[component]));
        component = parentComponentHtml.match(/c-\S*/);
    }

    return `
${parentComponent.css ? '<style>' : ''}
${parentComponent.css}
${parentComponent.css ? '</style>' : ''}
${parentComponentHtml}
${parentComponent.js ? '<script type="module">' : ''}
${parentComponent.js}
${parentComponent.js ? '</script>' : ''}
    `;
}

/**
 * Update all script import paths
 * @param {Object.<string, ComponentContent>} content
 * @returns {Object.<string, ComponentContent>}
 */
function updateImportsPaths(content) {
    const contentWithUpdatedImports = JSON.parse(JSON.stringify(content));
    for(const element in contentWithUpdatedImports) {
        const script = contentWithUpdatedImports[element].js;
        contentWithUpdatedImports[element].js = updateScriptImports(script);
    }

    return contentWithUpdatedImports;
}

/**
 * Update script import paths
 * @param {string} scriptContent
 * @returns {string}
 */
function updateScriptImports(scriptContent) {
    let scriptDependencies = scriptContent.matchAll(/import .*/g);
    let newScriptContent = scriptContent;
    for(const dependency of scriptDependencies) {
        const sourceFile = dependency?.[0].replace(/import .*?'/, '').replace(/'.*$/g,'').match(/[a-zA-Z]*?\.[a-zA-Z]*?$/)[0];

        newScriptContent = newScriptContent.replace(dependency[0], dependency[0].replace(/'.*$/g, `'./scripts/${sourceFile}';`));
    }

    return newScriptContent;
}

/**
 * Copy file from source folder to destination folder
 * @param {string} fileName
 * @param {string} sourceFolder
 * @param {string} destinationFolder
 */
async function copyFile(fileName, sourceFolder, destinationFolder) {
    try {
        const sourceFile = await readFile(`${sourceFolder}/${fileName}`, 'utf-8');
        await writeFile(`${destinationFolder}/${fileName}`, sourceFile, { flag: 'w+' });
    } catch(errorCopyingFile) {
        console.error(`Error copying file ${fileName} from ${sourceFolder} to ${destinationFolder}`);
        console.error(errorCopyingFile);
    }
}

/**
 * Create index.html file with views and components html/js/css
 * @param {Object.<string, ComponentContent>} views
 * @param {Object.<string, ComponentContent>} components
 * @returns {Promise<void>}
 */
async function createIndexFile(views, components) {
    // Get root file content
    const root = await readFile('./src/index.html', 'utf-8');
    const viewDependencies = root.match(/<v-\S*/g).map(
        /** @param {string} view */
        view => view.replace('<',''));
    let html = '';
    let viewHtml = '';
    // replace view tag with view content
    for(const view of viewDependencies) {
        viewHtml = getComponentsContent(components, views[view]);

        html = root.replace(new RegExp(`<${view} />`), viewHtml);
    }
    html = html.replace(/\r/g, '');

    // create or replace dist folder
    try {
        await mkdir('./dist');
    } catch(errorCreatingDirectory) {
        await rm('./dist', { recursive: true });
        await mkdir('./dist');
    }

    // write main build file (index.html)
    await writeFile('./dist/index.html', html, { flag: 'w+' });
}

async function copyAllScripts() {
    // Get all scripts in src/scripts,
    // overwrite their import paths
    // and copy them to dist/scripts
    await mkdir('./dist/scripts');
    const scripts = await readdir('./src/scripts');
    for(const script of scripts) {
        if(/\.js/.test(script)) {
            await copyFile(script, './src/scripts', './dist/scripts');
            let scriptContent = await readFile(`./dist/scripts/${script}`, 'utf-8');
            scriptContent = updateScriptImports(scriptContent);
            await writeFile(`./dist/scripts/${script}`, scriptContent, { flag: 'w+' });
        } else {
            const internalScripts = await readdir(`./src/scripts/${script}`);
            for(const internalScript of internalScripts) {
                await copyFile(internalScript, `./src/scripts/${script}`, './dist/scripts');
                let scriptContent = await readFile(`./dist/scripts/${internalScript}`, 'utf-8');
                scriptContent = updateScriptImports(scriptContent);
                await writeFile(`./dist/scripts/${internalScript}`, scriptContent, { flag: 'w+' });
            }
        }
    }
}

async function copyAssets() {
    const folders = await readdir('./src', { recursive: true });

    for(const folder of folders) {
        if(/\.png/.test(folder)) {
            const fileName = folder.match(/[a-zA-Z]*?\.[a-zA-Z]*?$/)[0];
            await copyFile(fileName, `./src/${folder.replace(fileName, '')}`, './dist/assets');
        }
    }
}
