import { readdir, readFile } from 'node:fs/promises';

import DirectedGraph from './build/classes/DirectedGraph.js';
import Stack from './build/classes/Stack.js';

(async () => {
    try {
        const fullDependencyGraph = new DirectedGraph();
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

        const root = await readFile('./src/index.html', 'utf-8');
        const viewDependencies = root.match(/<v-\S*/g).map(view => view.replace('<',''));
        let html = '';
        let viewHtml = '';
        let componentHtml = '';
        for(const view of viewDependencies) {
            viewHtml = views[view].html;
            let component = viewHtml.match(/c-\S*/);
            while(component) {
                componentHtml = components[component].html;
                let subComponent = componentHtml.match(/c-\S*/);
                while(subComponent) {
                    componentHtml = componentHtml.replace(`<${subComponent} />`, components[subComponent].html);
                    subComponent = componentHtml.match(/c-\S*/);
                }
                viewHtml = viewHtml.replace(new RegExp(`<${component} />`), componentHtml);
                component = viewHtml.match(/c-\S*/);
            }

            html = root.replace(new RegExp(`<${view} />`), viewHtml);
        }

        console.log('html: ', html);

    } catch(errorBuildingApplication) {
        console.log('ERROR!')
        console.error(errorBuildingApplication);
    }
})()
