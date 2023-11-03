import { readdir, readFile } from 'node:fs/promises';

import DirectedGraph from './build/classes/DirectedGraph.js';

(async () => {
    try {
        const fullDependencyGraph = new DirectedGraph();
        const root = await readFile('./src/index.html', 'utf-8');
        const viewDependencies = root.match(/<v-\S*/g).map(view => view.replace('<',''));
        
        // search for views used in index.html
        //   if not found: error
        //   if found, load view files.
        

        const viewFolders = await readdir('./src/views');
        console.log(viewFolders); 

        const views = {};
        for (const folder of viewFolders) {
            console.log(`Reading files from folder ${folder}`);
            const files = await readdir(`./src/views/${folder}`);
            console.log(`Found ${files.length} files`);
        }

        const components = {};
        const componentFolders = await readdir('./src/components');
        for(const folder of componentFolders) {
            console.log(`Reading files from folder ${folder}`);
            const files = await readdir(`./src/components/${folder}`);
            console.log(`Found ${files.length} files`);
            const html = await readFile(`./src/components/${folder}/template.html`, 'utf-8');
            const js = await readFile(`./src/components/${folder}/script.js`, 'utf-8');
            const css = await readFile(`./src/components/${folder}/style.css`, 'utf-8');

            components[folder] = {
                html: html,
                js: js,
                css: css,
            };
            componentDependencyGraph.addVertex(folder);
            const dependencies = html.match(/c-\S*/);
            if(!dependencies) {
                continue;
            }
            for(const componentName of dependencies) {
                componentDependencyGraph.addEdge(folder, componentName);
            }
        }
        console.log(componentDependencyGraph.adjacencyList)

        console.log(componentDependencyGraph.printGraph());

        if(componentDependencyGraph.isCyclic()) {
            console.log('Ca\'t build the application because there are cyclic dependencies!');
            return;
        }

        const componentsOrder = componentDependencyGraph.topologicalSort();
        console.log('componentsOrder: ', componentsOrder);
    } catch(errorBuildingApplication) {
        console.log('error?')
        console.error(errorBuildingApplication);
    }
})()
