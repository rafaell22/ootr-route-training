import DirectedGraph from '#classes/DirectedGraph.js';
import LOCATIONS from '#data/locations.js';
import AGES from '#data/ages.js';
import TIME_OF_DAY from '#data/timeOfDay.js';
import DUNGEON_REWARDS from '#data/dungeonRewards.js';
import ITEMS from '#data/items.js';
import SONGS from '#data/songs.js';

export default function loadPassages(locationsGraph, seedLocations, seedSettings) {
    // HF connections
    locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.LON_LON_RANCH, {});
    locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.MARKET, {
        or: [
            {
                isAge: AGES.ADULT,
            },
            {
                isAge: AGES.CHILD,
                onTime: TIME_OF_DAY.DAY,
            }
        ]
    });
    locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.KAKARIKO_VILLAGE, {});
    locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.ZORA_RIVER_ENTRANCE, {});
    locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.KOKIRI_FOREST, {});
    locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.LAKE_HYLIA, {});
    locationsGraph.addEdge(LOCATIONS.HYRULE_FIELD, LOCATIONS.GERUDO_VALLEY, {});

    // LLR
    locationsGraph.addEdge(LOCATIONS.LON_LON_RANCH, LOCATIONS.HYRULE_FIELD, {});

    // MKT
    locationsGraph.addEdge(LOCATIONS.MARKET, LOCATIONS.HYRULE_FIELD, { 
        or: [
            { isAge: AGES.ADULT },
            {
                isAge: AGES.CHILD,
                onTime: TIME_OF_DAY.DAY,
            },
        ]
    });
    locationsGraph.addEdge(LOCATIONS.MARKET, LOCATIONS.HYRULE_CASTLE, {
        isAge: AGES.CHILD,
    });
    locationsGraph.addEdge(LOCATIONS.MARKET, LOCATIONS.TEMPLE_OF_TIME, {});
    locationsGraph.addEdge(LOCATIONS.MARKET, LOCATIONS.OUTSIDE_GANON_CASTLE, {
        isAge: AGES.ADULT,
    });

    // HC
    locationsGraph.addEdge(LOCATIONS.HYRULE_CASTLE, LOCATIONS.MARKET, {
        isAge: AGES.CHILD,
    });

    // TOT
    locationsGraph.addEdge(LOCATIONS.TEMPLE_OF_TIME, LOCATIONS.MARKET, {});
    locationsGraph.addEdge(LOCATIONS.TEMPLE_OF_TIME, LOCATIONS.MASTER_SWORD_PEDESTAL, {
        or: [
            {
                isAge: AGES.CHILD,
                hasItem: [
                    DUNGEON_REWARDS.KOKIRI_EMERALD,
                    DUNGEON_REWARDS.GORON_RUBY,
                    DUNGEON_REWARDS.ZORA_SAPPHIRE,
                    SONGS.SONG_OF_TIME,
                    
                ]
            },
            { isAge: AGES.ADULT },
        ]
    });

    locationsGraph.addEdge(LOCATIONS.MASTER_SWORD_PEDESTAL, LOCATIONS.TEMPLE_OF_TIME, {});

    // OGC
    locationsGraph.addEdge(LOCATIONS.OUTSIDE_GANON_CASTLE, LOCATIONS.MARKET, {
        isAge: AGES.ADULT,
    });
    locationsGraph.addEdge(LOCATIONS.OUTSIDE_GANON_CASTLE, LOCATIONS.INSIDE_GANON_CASTLE, {
        isAge: AGES.ADULT,
        hasItem: [
            DUNGEON_REWARDS.LIGHT_MEDALION,
            DUNGEON_REWARDS.FOREST_MEDALION,
            DUNGEON_REWARDS.FIRE_MEDALION,
            DUNGEON_REWARDS.WATER_MEDALION,
            DUNGEON_REWARDS.SHADOW_MEDALION,
            DUNGEON_REWARDS.SPIRIT_MEDALION,
        ],
    });

    // IGC
    locationsGraph.addEdge(LOCATIONS.INSIDE_GANON_CASTLE, LOCATIONS.OUTSIDE_GANON_CASTLE, {});

    // KAK
    locationsGraph.addEdge(LOCATIONS.KAKARIKO_VILLAGE, LOCATIONS.HYRULE_FIELD, {});
    locationsGraph.addEdge(LOCATIONS.KAKARIKO_VILLAGE, LOCATIONS.GRAVEYARD, {});
    locationsGraph.addEdge(LOCATIONS.KAKARIKO_VILLAGE, LOCATIONS.DEATH_MOUNTAIN_TRAIL_LOWER, {
        or: [
            { isAge: AGES.ADULT, },
            {
                isAge: AGES.CHILD,
                hasItem: ITEMS.ZELDA_LETTER,
            }
        ]
    });
    locationsGraph.addEdge(LOCATIONS.KAKARIKO_VILLAGE, LOCATIONS.BOTTOM_OF_THE_WELL, {
        isAge: AGES.CHILD,
        hasItem: SONGS.SONG_OF_STORMS,
    });

    // GRY
    locationsGraph.addEdge(LOCATIONS.GRAVEYARD, LOCATIONS.KAKARIKO_VILLAGE, {});
    locationsGraph.addEdge(LOCATIONS.GRAVEYARD, LOCATIONS.SHADOW_TEMPLE, {
        hasItem: [
            ITEMS.DINS_FIRE,
            SONGS.NOCTURNE_OF_SHADOW,
        ]
    });

    // DMT
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_TRAIL_LOWER, LOCATIONS.KAKARIKO_VILLAGE, {
        or: [
            { isAge: AGES.ADULT, },
            {
                isAge: AGES.CHILD,
                hasItem: ITEMS.ZELDA_LETTER,
            }
        ]
    });
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_TRAIL_LOWER, LOCATIONS.DEATH_MOUNTAIN_TRAIL_UPPER, {
        hasItem: ITEMS.BOMBS,
        alt: {
            hasItem: ITEMS.BOMBCHUS,
        }
    })
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_TRAIL_LOWER, LOCATIONS.GORON_CITY, {});
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_TRAIL_LOWER, LOCATIONS.DODONGO_CAVERN, {
        or: [
            { hasItem: ITEMS.BOMBS, },
            { 
                hasItem: { 
                    item: ITEMS.STRENGTH, 
                    quantity: 1 
                }
            },
            {
                isAge: AGES.ADULT
            }
        ]
    });
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_TRAIL_UPPER, LOCATIONS.DEATH_MOUNTAIN_TRAIL_LOWER, {});
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_TRAIL_UPPER, LOCATIONS.DEATH_MOUNTAIN_CRATER_UPPER, {});
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_TRAIL_UPPER, LOCATIONS.KAKARIKO_VILLAGE, {
        isAge: AGES.CHILD,
        onTime: TIME_OF_DAY.DAY,
    });

    // DMC
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_CRATER_UPPER, LOCATIONS.DEATH_MOUNTAIN_TRAIL_UPPER, {});
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_CRATER_UPPER, LOCATIONS.DEATH_MOUNTAIN_CRATER_GORON_CITY);

    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_CRATER_GORON_CITY, LOCATIONS.DEATH_MOUNTAIN_CRATER_UPPER);
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_CRATER_GORON_CITY, LOCATIONS.GORON_CITY);
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_CRATER_GORON_CITY, LOCATIONS.DEATH_MOUNTAIN_CRATER_FIRE_TEMPLE);

    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_CRATER_FIRE_TEMPLE, LOCATIONS.DEATH_MOUNTAIN_CRATER_GORON_CITY);
    locationsGraph.addEdge(LOCATIONS.DEATH_MOUNTAIN_CRATER_FIRE_TEMPLE, LOCATIONS.FIRE_TEMPLE);

    // GC
    locationsGraph.addEdge(LOCATIONS.GORON_CITY, LOCATIONS.DEATH_MOUNTAIN_CRATER_GORON_CITY);
    locationsGraph.addEdge(LOCATIONS.GORON_CITY, LOCATIONS.DEATH_MOUNTAIN_TRAIL_LOWER);
    locationsGraph.addEdge(LOCATIONS.GORON_CITY, LOCATIONS.LOST_WOODS);

    // ZR
    locationsGraph.addEdge(LOCATIONS.ZORA_RIVER, LOCATIONS.LOST_WOODS);
    locationsGraph.addEdge(LOCATIONS.ZORA_RIVER, LOCATIONS.HYRULE_FIELD);
    locationsGraph.addEdge(LOCATIONS.ZORA_RIVER, LOCATIONS.ZORA_DOMAIN);

    // ZD
    locationsGraph.addEdge(LOCATIONS.ZORA_DOMAIN, LOCATIONS.ZORA_RIVER);
    locationsGraph.addEdge(LOCATIONS.ZORA_DOMAIN, LOCATIONS.ZORA_FOUNTAIN);
    locationsGraph.addEdge(LOCATIONS.ZORA_DOMAIN, LOCATIONS.LAKE_HYLIA);

    // ZF
    locationsGraph.addEdge(LOCATIONS.ZORA_FOUNTAIN, LOCATIONS.ZORA_DOMAIN);
    locationsGraph.addEdge(LOCATIONS.ZORA_FOUNTAIN, LOCATIONS.ICE_CAVERN);
    locationsGraph.addEdge(LOCATIONS.ZORA_FOUNTAIN, LOCATIONS.JABU_JABU);

    // LW
    locationsGraph.addEdge(LOCATIONS.LOST_WOODS, LOCATIONS.KOKIRI_FOREST);
    locationsGraph.addEdge(LOCATIONS.LOST_WOODS, LOCATIONS.SACRED_FOREST_MEADOW);
    locationsGraph.addEdge(LOCATIONS.LOST_WOODS, LOCATIONS.GORON_CITY);
    locationsGraph.addEdge(LOCATIONS.LOST_WOODS, LOCATIONS.ZORA_RIVER);

    // SFM
    locationsGraph.addEdge(LOCATIONS.SACRED_FOREST_MEADOW, LOCATIONS.LOST_WOODS);
    locationsGraph.addEdge(LOCATIONS.SACRED_FOREST_MEADOW, LOCATIONS.FOREST_TEMPLE);

    // KF
    locationsGraph.addEdge(LOCATIONS.KOKIRI_FOREST, LOCATIONS.HYRULE_FIELD);
    locationsGraph.addEdge(LOCATIONS.KOKIRI_FOREST, LOCATIONS.LOST_WOODS);
    locationsGraph.addEdge(LOCATIONS.KOKIRI_FOREST, LOCATIONS.DEKU_TREE);

    // LH
    locationsGraph.addEdge(LOCATIONS.LAKE_HYLIA, LOCATIONS.ZORA_DOMAIN);
    locationsGraph.addEdge(LOCATIONS.LAKE_HYLIA, LOCATIONS.WATER_TEMPLE);
    locationsGraph.addEdge(LOCATIONS.LAKE_HYLIA, LOCATIONS.HYRULE_FIELD);

    // GV
    locationsGraph.addEdge(LOCATIONS.GERUDO_VALLEY, LOCATIONS.HYRULE_FIELD);
    locationsGraph.addEdge(LOCATIONS.GERUDO_VALLEY, LOCATIONS.GERUDO_FORTRESS);
    locationsGraph.addEdge(LOCATIONS.GERUDO_VALLEY, LOCATIONS.LAKE_HYLIA);

    // GF
    locationsGraph.addEdge(LOCATIONS.GERUDO_FORTRESS, LOCATIONS.GERUDO_VALLEY);
    locationsGraph.addEdge(LOCATIONS.GERUDO_FORTRESS, LOCATIONS.HAUNTED_WASTELAND);
    locationsGraph.addEdge(LOCATIONS.GERUDO_FORTRESS, LOCATIONS.GERUDO_TRAINING_GROUNDS);

    // HW
    locationsGraph.addEdge(LOCATIONS.HAUNTED_WASTELAND, LOCATIONS.GERUDO_FORTRESS);
    locationsGraph.addEdge(LOCATIONS.HAUNTED_WASTELAND, LOCATIONS.DESERT_COLOSSUS);

    // DCO
    locationsGraph.addEdge(LOCATIONS.DESERT_COLOSSUS, LOCATIONS.HAUNTED_WASTELAND);
    locationsGraph.addEdge(LOCATIONS.DESERT_COLOSSUS, LOCATIONS.SPIRIT_TEMPLE);

    // Deku
    locationsGraph.addEdge(LOCATIONS.DEKU_TREE, LOCATIONS.KOKIRI_FOREST);

    // DC
    locationsGraph.addEdge(LOCATIONS.DODONGO_CAVERN, LOCATIONS.DEATH_MOUNTAIN_TRAIL_LOWER);

    // Jabu
    locationsGraph.addEdge(LOCATIONS.JABU_JABU, LOCATIONS.ZORA_FOUNTAIN);

    // Forest
    locationsGraph.addEdge(LOCATIONS.FOREST_TEMPLE, LOCATIONS.SACRED_FOREST_MEADOW);

    // Fire
    locationsGraph.addEdge(LOCATIONS.FIRE_TEMPLE, LOCATIONS.DEATH_MOUNTAIN_CRATER_FIRE_TEMPLE);

    // Water
    locationsGraph.addEdge(LOCATIONS.WATER_TEMPLE, LOCATIONS.LAKE_HYLIA);

    // Shadow
    locationsGraph.addEdge(LOCATIONS.SHADOW_TEMPLE, LOCATIONS.GRAVEYARD);

    // Spirit
    locationsGraph.addEdge(LOCATIONS.SPIRIT_TEMPLE, LOCATIONS.DESERT_COLOSSUS);

    // GTG
    locationsGraph.addEdge(LOCATIONS.GERUDO_TRAINING_GROUNDS, LOCATIONS.GERUDO_FORTRESS);

    // BotW
    locationsGraph.addEdge(LOCATIONS.BOTTOM_OF_THE_WELL, LOCATIONS.KAKARIKO_VILLAGE);

    // Ice
    locationsGraph.addEdge(LOCATIONS.ICE_CAVERN, LOCATIONS.ZORA_FOUNTAIN);

    return locationsGraph;
}
