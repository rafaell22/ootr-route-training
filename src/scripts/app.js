// @ts-check
// load seed data
// load locations
// load passages
// load checks
// load rewards
// initialize player
// add initial items to player inventory
// add initial rupees to player wallet
// add initial songs to player
// add initial rewards to player
// set spawn location
// set spawn age


// --- Gameplay
// show player current location
// available commands:
//  check
//    if possible, get reward
//    if not possible, let player know what they are missing
//  move
//    if possible, update player's location
//    if not possible, let player know what they are missing
//  available
//    view available checks
//    view available locations
//    view current items
//    view current rewards
//    view current rupees
//    view current songs
//    view available tricks (based on items and location)
//  do
//    do trick to "break" logic and make checks/locations available
import loadLocations from './loadLocations.js';
import loadPassages from './loadPassages.js';
import readSpoilerLog from './readSpoilerLog.js'

(async () => {
/*
 *    const spoilerData = await readSpoilerLog('./input/');
 *
 *    const settings = spoilerData.settings;
 *    const randomizedSettings = spoilerData.randomizedSettings;
 *    const itemPool = spoilerData.item_pool;
 *    const dungeonsTypes = spoilerData.dundeons;
 *    const emptyDungeons = spoilerData.empty_dungeons;
 *    const trials = spoilerData.trials;
 *    const randomizedEntrances = spoilerData.entrances;
 *    const checks = spoilerData.locations;
 *    const skippedChecks = spoilerData.skipped_locations;
 *    const gossipStones = spoilerData.gossip_stones;
 */

    // load locations
    console.log('Loading locations...');
    const locationsGraph = loadLocations();
    locationsGraph.printGraph()
    // load passages
    console.log('Loading entrances...');
    loadPassages(locationsGraph);
})()
