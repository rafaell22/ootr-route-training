import DirectedGraph from "../classes/DirectedGraph.js";
import LOCATIONS from "./locations.js";

const locationsGraph = new DirectedGraph();
for(const location in LOCATIONS) {
    locationsGraph.addVertex(location);
}

// HF connections
locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.LON_LON_RANCH);
locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.MARKET);
locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.KAKARIKO_VILLAGE);
locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.ZORA_RIVER);
locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.KOKIRI_FOREST);
locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.LAKE_HYLIA);
locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.GERUDO_VALLEY);

locationsGraph.addEdge(LOCATIONS.LON_LON_RANCH, LOCATIONS.HYRULE_FIELD);

locationsGraph.addEdge(LOCATIONS.MARKET, LOCATIONS.HYRULE_FIELD);
locationsGraph.addEdge(LOCATIONS.MARKET, LOCATIONS.HYRULE_CASTLE);
locationsGraph.addEdge(LOCATIONS.MARKET, LOCATIONS.TEMPLE_OF_TIME);
locationsGraph.addEdge(LOCATIONS.MARKET, LOCATIONS.OUTSIDE_GANON_CASTLE);

locationsGraph.addEdge(LOCATIONS.HYRULE_CASTLE, LOCATIONS.MARKET);

locationsGraph.addEdge(LOCATIONS.HYRULE_CASTLE, LOCATIONS.MARKET);
