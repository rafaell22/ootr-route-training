import { readdir, readFile, rm, mkdir, writeFile } from 'node:fs/promises';
import DirectedGraph from './build/classes/DirectedGraph.js';

(async () => {
    try {
        // READ COMPONENTS
        const components = {};
        const componentFolders = await readdir('./src/components');
        for(const component of componentFolders) {
            console.log(`Reading files from folder ${component}`);
            let html;
            try {
                html = await readFile(`./src/components/${component}/template.html`, 'utf-8');
            } catch(errorGettingComponentHtml) {
                console.error(`Missing template for component ${component}`);
                console.error(errorGettingComponentHtml);
                return;
            }

            let js;
            try {
                js = await readFile(`./src/components/${component}/script.js`, 'utf-8');
            } catch(errorGettingComponentScript) {
                console.error(`Missing script for component ${component}`);
                console.error(errorGettingComponentScript);
                return;
            }

            let css;
            try {
                css = await readFile(`./src/components/${component}/style.css`, 'utf-8');
            } catch(errorGettingComponentStyle) {
                console.error(`Missing style for component ${component}`);
                console.error(errorGettingComponentStyle);
                return;
            }

            components[component] = {
                html: html,
                js: js,
                css: css,
            };
        }

        // READ VIEWS
        const views = {};
        const viewFolders = await readdir('./src/views');
        for(const view of viewFolders) {
            console.log(`Reading files from folder ${view}`);
            let html;
            try {
                html = await readFile(`./src/views/${view}/template.html`, 'utf-8');
            } catch(errorGettingViewHtml) {
                console.error(`Missing template for view ${view}`);
                console.error(errorGettingViewHtml);
                return;
            }

            let js;
            try {
                js = await readFile(`./src/views/${view}/script.js`, 'utf-8');
            } catch(errorGettingViewScript) {
                console.error(`Missing script for view ${view}`);
                console.error(errorGettingViewScript);
                return;
            }

            let css;
            try {
                css = await readFile(`./src/views/${view}/style.css`, 'utf-8');
            } catch(errorGettingViewStyle) {
                console.error(`Missing style for view ${view}`);
                console.error(errorGettingViewStyle);
                return;
            }

            views[view] = {
                html: html,
                js: js,
                css: css,
            };
        }

        // UPDATE IMPORTS INSIDE VIEWS AND COMPONENTS
        updateViewsAndComponentsImports(views, components);

        // Get root file content
        const root = await readFile('./src/index.html', 'utf-8');
        const viewDependencies = root.match(/<v-\S*/g).map(view => view.replace('<',''));
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

        // copy styles
        await mkdir('./dist/styles');
        await copyFile('main.css', './src/styles', './dist/styles');
    } catch(errorBuildingApplication) {
        console.log('ERROR!')
        console.error(errorBuildingApplication);
    }
})()

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

function updateViewsAndComponentsImports(views, components) {
    for(const view in views) {
        let viewScript = views[view].js;
        views[view].js = updateScriptImports(viewScript);
    }

    for(const component in components) {
        let componentScript = components[component].js;
        components[component].js = updateScriptImports(componentScript);
    }
}

function updateScriptImports(scriptContent) {
    let scriptDependencies = scriptContent.matchAll(/import .*/g);
    let newScriptContent = scriptContent;
    for(const dependency of scriptDependencies) {
        const sourceFile = dependency?.[0].replace(/import .*?'/, '').replace(/'.*$/g,'').match(/[a-zA-Z]*?\.[a-zA-Z]*?$/)[0];

        newScriptContent = newScriptContent.replace(dependency[0], dependency[0].replace(/'.*$/g, `'./scripts/${sourceFile}';`));
    }

    return newScriptContent;
}

async function copyFile(fileName, sourceFolder, destinationFolder) {
    try {
        const sourceFile = await readFile(`${sourceFolder}/${fileName}`, 'utf-8');
        await writeFile(`${destinationFolder}/${fileName}`, sourceFile, { flag: 'w+' });
    } catch(errorCopyingFile) {
        console.error(`Error copying file ${fileName} from ${sourceFolder} to ${destinationFolder}`);
        console.error(errorCopyingFile);
    }
}
