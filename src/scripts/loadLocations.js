// @ts-check
import LOCATIONS from '#data/locations.js';

import DirectedGraph from '#classes/DirectedGraph.js';

export default function() {
    const locationsGraph = new DirectedGraph();
    for(const location in LOCATIONS) {
        locationsGraph.addVertex(LOCATIONS[location]);     
    }
    return locationsGraph;
}
