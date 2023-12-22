// add checks
// add rewards
// initialize directed graph
// set edges and nodes based on logic and available locations
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

import readSpoilerLog from './scripts/readSpoilerLog.js'

(async () => {
    await readSpoilerLog('textLineMode/input/');
})()
