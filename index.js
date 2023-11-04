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
            fullDependencyGraph.addVertex(component);
            const dependencies = html.match(/c-\S*/);
            if(!dependencies) {
                continue;
            }
            for(const componentName of dependencies) {
                fullDependencyGraph.addEdge(component, componentName);
            }
        }
        if(fullDependencyGraph.isCyclic()) {
            console.log('Ca\'t build the application because there are cyclic components dependencies!');
            return;
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

            fullDependencyGraph.addVertex(view);
            const viewComponents = html.match(/c-\S*/);
            if(!viewComponents) {
                continue;
            }
                
            for(const component of viewComponents) {
                if(!fullDependencyGraph.has(component)) {
                    console.error(`Missing dependency for component ${component} in view ${view}`);
                    return;
                }
                fullDependencyGraph.addEdge(view, component);
            }
        }
        fullDependencyGraph.printGraph();
        const dependenciesOrder = fullDependencyGraph.topologicalSort();
        console.log('componentsOrder: ', dependenciesOrder);

        const dependencyStack = new Stack();
        const root = await readFile('./src/index.html', 'utf-8');
        const viewDependencies = root.match(/<v-\S*/g).map(view => view.replace('<',''));
        for(const view of viewDependencies) {
            dependencyStack.push(view);
        }

    } catch(errorBuildingApplication) {
        console.log('error?')
        console.error(errorBuildingApplication);
    }
})()
