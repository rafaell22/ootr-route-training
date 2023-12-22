// @ts-check
'use strict'

import createEnum from '../classes/createEnum.js';

/**
 * @property {string} LINKS_POCKET
 * @property {string} QUEEN_GOHMA
 * @property {string} KING_DODONGO
 * @property {string} BARINADE
 * @property {string} PHANTOM_GANON
 * @property {string} VOLVAGIA
 * @property {string} MORPHA
 * @property {string} BONGO_BONGO
 * @property {string} TWINROVA
 * @property {string} SONG_FROM_IMPA
 * @property {string} SONG_FROM_MALON
 * @property {string} SONG_FROM_SARIA
 * @property {string} SONG_FROM_ROYAL_FAMILYS_TOMB
 * @property {string} SONG_FROM_OCARINA_OF_TIME
 * @property {string} SONG_FROM_WINDMILL
 * @property {string} SHEIK_IN_FOREST
 * @property {string} SHEIK_IN_CRATER
 * @property {string} SHEIK_IN_ICE_CAVERN
 * @property {string} SHEIK_AT_COLOSSUS
 * @property {string} SHEIK_IN_KAKARIKO
 * @property {string} SHEIK_AT_TEMPLE
 * @property {string} KF_MIDOS_TOP_LEFT_CHEST
 * @property {string} KF_MIDOS_TOP_RIGHT_CHEST
 * @property {string} KF_MIDOS_BOTTOM_LEFT_CHEST
 * @property {string} KF_MIDOS_BOTTOM_RIGHT_CHEST
 * @property {string} KF_KOKIRI_SWORD_CHEST
 * @property {string} KF_STORMS_GROTTO_CHEST
 * @property {string} LW_OCARINA_MEMORY_GAME
 * @property {string} LW_TARGET_IN_WOODS
 * @property {string} LW_NEAR_SHORTCUTS_GROTTO_CHEST
 * @property {string} DEKU_THEATER_SKULL_MASK
 * @property {string} DEKU_THEATER_MASK_OF_TRUTH
 * @property {string} LW_SKULL_KID
 * @property {string} LW_DEKU_SCRUB_NEAR_BRIDGE
 * @property {string} LW_DEKU_SCRUB_GROTTO_FRONT
 * @property {string} SFM_WOLFOS_GROTTO_CHEST
 * @property {string} HF_NEAR_MARKET_GROTTO_CHEST
 * @property {string} HF_TEKTITE_GROTTO_FREESTANDING_POH
 * @property {string} HF_SOUTHEAST_GROTTO_CHEST
 * @property {string} HF_OPEN_GROTTO_CHEST
 * @property {string} HF_DEKU_SCRUB_GROTTO
 * @property {string} MARKET_SHOOTING_GALLERY_REWARD
 * @property {string} MARKET_BOMBCHU_BOWLING_FIRST_PRIZE
 * @property {string} MARKET_BOMBCHU_BOWLING_SECOND_PRIZE
 * @property {string} MARKET_LOST_DOG
 * @property {string} MARKET_TREASURE_CHEST_GAME_REWARD
 * @property {string} MARKET_10_BIG_POES
 * @property {string} TOT_LIGHT_ARROWS_CUTSCENE
 * @property {string} HC_GREAT_FAIRY_REWARD
 * @property {string} LLR_TALONS_CHICKENS
 * @property {string} LLR_FREESTANDING_POH
 * @property {string} KAK_ANJU_AS_CHILD
 * @property {string} KAK_ANJU_AS_ADULT
 * @property {string} KAK_IMPAS_HOUSE_FREESTANDING_POH
 * @property {string} KAK_WINDMILL_FREESTANDING_POH
 * @property {string} KAK_MAN_ON_ROOF
 * @property {string} KAK_OPEN_GROTTO_CHEST
 * @property {string} KAK_REDEAD_GROTTO_CHEST
 * @property {string} KAK_SHOOTING_GALLERY_REWARD
 * @property {string} KAK_10_GOLD_SKULLTULA_REWARD
 * @property {string} KAK_20_GOLD_SKULLTULA_REWARD
 * @property {string} KAK_30_GOLD_SKULLTULA_REWARD
 * @property {string} KAK_40_GOLD_SKULLTULA_REWARD
 * @property {string} KAK_50_GOLD_SKULLTULA_REWARD
 * @property {string} GRAVEYARD_SHIELD_GRAVE_CHEST
 * @property {string} GRAVEYARD_HEART_PIECE_GRAVE_CHEST
 * @property {string} GRAVEYARD_ROYAL_FAMILYS_TOMB_CHEST
 * @property {string} GRAVEYARD_FREESTANDING_POH
 * @property {string} GRAVEYARD_DAMPE_GRAVEDIGGING_TOUR
 * @property {string} GRAVEYARD_DAMPE_RACE_HOOKSHOT_CHEST
 * @property {string} GRAVEYARD_DAMPE_RACE_FREESTANDING_POH
 * @property {string} DMT_FREESTANDING_POH
 * @property {string} DMT_CHEST
 * @property {string} DMT_STORMS_GROTTO_CHEST
 * @property {string} DMT_GREAT_FAIRY_REWARD
 * @property {string} DMT_BIGGORON
 * @property {string} GC_DARUNIAS_JOY
 * @property {string} GC_POT_FREESTANDING_POH
 * @property {string} GC_ROLLING_GORON_AS_CHILD
 * @property {string} GC_ROLLING_GORON_AS_ADULT
 * @property {string} GC_MAZE_LEFT_CHEST
 * @property {string} GC_MAZE_CENTER_CHEST
 * @property {string} GC_MAZE_RIGHT_CHEST
 * @property {string} DMC_VOLCANO_FREESTANDING_POH
 * @property {string} DMC_WALL_FREESTANDING_POH
 * @property {string} DMC_UPPER_GROTTO_CHEST
 * @property {string} DMC_GREAT_FAIRY_REWARD
 * @property {string} ZR_OPEN_GROTTO_CHEST
 * @property {string} ZR_FROGS_IN_THE_RAIN
 * @property {string} ZR_FROGS_OCARINA_GAME
 * @property {string} ZR_NEAR_OPEN_GROTTO_FREESTANDING_POH
 * @property {string} ZR_NEAR_DOMAIN_FREESTANDING_POH
 * @property {string} ZD_DIVING_MINIGAME
 * @property {string} ZD_CHEST
 * @property {string} ZD_KING_ZORA_THAWED
 * @property {string} ZF_GREAT_FAIRY_REWARD
 * @property {string} ZF_ICEBERG_FREESTANDING_POH
 * @property {string} ZF_BOTTOM_FREESTANDING_POH
 * @property {string} LH_UNDERWATER_ITEM
 * @property {string} LH_CHILD_FISHING
 * @property {string} LH_ADULT_FISHING
 * @property {string} LH_LAB_DIVE
 * @property {string} LH_FREESTANDING_POH
 * @property {string} LH_SUN
 * @property {string} GV_CRATE_FREESTANDING_POH
 * @property {string} GV_WATERFALL_FREESTANDING_POH
 * @property {string} GV_CHEST
 * @property {string} GF_CHEST
 * @property {string} GF_HBA_1000_POINTS
 * @property {string} GF_HBA_1500_POINTS
 * @property {string} WASTELAND_CHEST
 * @property {string} COLOSSUS_GREAT_FAIRY_REWARD
 * @property {string} COLOSSUS_FREESTANDING_POH
 * @property {string} OGC_GREAT_FAIRY_REWARD
 * @property {string} DEKU_TREE_MAP_CHEST
 * @property {string} DEKU_TREE_SLINGSHOT_ROOM_SIDE_CHEST
 * @property {string} DEKU_TREE_SLINGSHOT_CHEST
 * @property {string} DEKU_TREE_COMPASS_CHEST
 * @property {string} DEKU_TREE_COMPASS_ROOM_SIDE_CHEST
 * @property {string} DEKU_TREE_BASEMENT_CHEST
 * @property {string} DEKU_TREE_qUEEN_GOHMA_HEART
 * @property {string} DODONGOS_CAVERN_MAP_CHEST
 * @property {string} DODONGOS_CAVERN_COMPASS_CHEST
 * @property {string} DODONGOS_CAVERN_BOMB_FLOWER_PLATFORM_CHEST
 * @property {string} DODONGOS_CAVERN_BOMB_BAG_CHEST
 * @property {string} DODONGOS_CAVERN_END_OF_BRIDGE_CHEST
 * @property {string} DODONGOS_CAVERN_BOSS_ROOM_CHEST
 * @property {string} DODONGOS_CAVERN_KING_DODONGO_HEART
 * @property {string} JABU_JABUS_BELLY_BOOMERANG_CHEST
 * @property {string} JABU_JABUS_BELLY_MAP_CHEST
 * @property {string} JABU_JABUS_BELLY_COMPASS_CHEST
 * @property {string} JABU_JABUS_BELLY_BARINADE_HEART
 * @property {string} BOTTOM_OF_THE_WELL_FRONT_LEFT_FAKE_WALL_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_FRONT_CENTER_BOMBABLE_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_BACK_LEFT_BOMBABLE_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_UNDERWATER_LEFT_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_FREESTANDING_KEY
 * @property {string} BOTTOM_OF_THE_WELL_COMPASS_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_CENTER_SKULLTULA_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_RIGHT_BOTTOM_FAKE_WALL_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_FIRE_KEESE_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_LIKE_LIKE_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_MAP_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_UNDERWATER_FRONT_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_INVISIBLE_CHEST
 * @property {string} BOTTOM_OF_THE_WELL_LENS_OF_TRUTH_CHEST
 * @property {string} FOREST_TEMPLE_FIRST_ROOM_CHEST
 * @property {string} FOREST_TEMPLE_FIRST_STALFOS_CHEST
 * @property {string} FOREST_TEMPLE_RAISED_ISLAND_COURTYARD_CHEST
 * @property {string} FOREST_TEMPLE_MAP_CHEST
 * @property {string} FOREST_TEMPLE_WELL_CHEST
 * @property {string} FOREST_TEMPLE_EYE_SWITCH_CHEST
 * @property {string} FOREST_TEMPLE_BOSS_KEY_CHEST
 * @property {string} FOREST_TEMPLE_FLOORMASTER_CHEST
 * @property {string} FOREST_TEMPLE_RED_POE_CHEST
 * @property {string} FOREST_TEMPLE_BOW_CHEST
 * @property {string} FOREST_TEMPLE_BLUE_POE_CHEST
 * @property {string} FOREST_TEMPLE_FALLING_CEILING_ROOM_CHEST
 * @property {string} FOREST_TEMPLE_BASEMENT_CHEST
 * @property {string} FOREST_TEMPLE_PHANTOM_GANON_HEART
 * @property {string} FIRE_TEMPLE_NEAR_BOSS_CHEST
 * @property {string} FIRE_TEMPLE_FLARE_DANCER_CHEST
 * @property {string} FIRE_TEMPLE_BOSS_KEY_CHEST
 * @property {string} FIRE_TEMPLE_BIG_LAVA_ROOM_LOWER_OPEN_DOOR_CHEST
 * @property {string} FIRE_TEMPLE_BIG_LAVA_ROOM_BLOCKED_DOOR_CHEST
 * @property {string} FIRE_TEMPLE_BOULDER_MAZE_LOWER_CHEST
 * @property {string} FIRE_TEMPLE_BOULDER_MAZE_SIDE_ROOM_CHEST
 * @property {string} FIRE_TEMPLE_MAP_CHEST
 * @property {string} FIRE_TEMPLE_BOULDER_MAZE_SHORTCUT_CHEST
 * @property {string} FIRE_TEMPLE_BOULDER_MAZE_UPPER_CHEST
 * @property {string} FIRE_TEMPLE_SCARECROW_CHEST
 * @property {string} FIRE_TEMPLE_COMPASS_CHEST
 * @property {string} FIRE_TEMPLE_MEGATON_HAMMER_CHEST
 * @property {string} FIRE_TEMPLE_HIGHEST_GORON_CHEST
 * @property {string} FIRE_TEMPLE_VOLVAGIA_HEART
 * @property {string} WATER_TEMPLE_COMPASS_CHEST
 * @property {string} WATER_TEMPLE_MAP_CHEST
 * @property {string} WATER_TEMPLE_CRACKED_WALL_CHEST
 * @property {string} WATER_TEMPLE_TORCHES_CHEST
 * @property {string} WATER_TEMPLE_BOSS_KEY_CHEST
 * @property {string} WATER_TEMPLE_CENTRAL_PILLAR_CHEST
 * @property {string} WATER_TEMPLE_CENTRAL_BOW_TARGET_CHEST
 * @property {string} WATER_TEMPLE_LONGSHOT_CHEST
 * @property {string} WATER_TEMPLE_RIVER_CHEST
 * @property {string} WATER_TEMPLE_DRAGON_CHEST
 * @property {string} WATER_TEMPLE_MORPHA_HEART
 * @property {string} SHADOW_TEMPLE_MAP_CHEST
 * @property {string} SHADOW_TEMPLE_HOVER_BOOTS_CHEST
 * @property {string} SHADOW_TEMPLE_COMPASS_CHEST
 * @property {string} SHADOW_TEMPLE_EARLY_SILVER_RUPEE_CHEST
 * @property {string} SHADOW_TEMPLE_INVISIBLE_BLADES_VISIBLE_CHEST
 * @property {string} SHADOW_TEMPLE_INVISIBLE_BLADES_INVISIBLE_CHEST
 * @property {string} SHADOW_TEMPLE_FALLING_SPIKES_LOWER_CHEST
 * @property {string} SHADOW_TEMPLE_FALLING_SPIKES_UPPER_CHEST
 * @property {string} SHADOW_TEMPLE_FALLING_SPIKES_SWITCH_CHEST
 * @property {string} SHADOW_TEMPLE_INVISIBLE_SPIKES_CHEST
 * @property {string} SHADOW_TEMPLE_FREESTANDING_KEY
 * @property {string} SHADOW_TEMPLE_WIND_HINT_CHEST
 * @property {string} SHADOW_TEMPLE_AFTER_WIND_ENEMY_CHEST
 * @property {string} SHADOW_TEMPLE_AFTER_WIND_HIDDEN_CHEST
 * @property {string} SHADOW_TEMPLE_SPIKE_WALLS_LEFT_CHEST
 * @property {string} SHADOW_TEMPLE_BOSS_KEY_CHEST
 * @property {string} SHADOW_TEMPLE_INVISIBLE_FLOORMASTER_CHEST
 * @property {string} SHADOW_TEMPLE_BONGO_BONGO_HEART
 * @property {string} SPIRIT_TEMPLE_CHILD_BRIDGE_CHEST
 * @property {string} SPIRIT_TEMPLE_CHILD_EARLY_TORCHES_CHEST
 * @property {string} SPIRIT_TEMPLE_CHILD_CLIMB_NORTH_CHEST
 * @property {string} SPIRIT_TEMPLE_CHILD_CLIMB_EAST_CHEST
 * @property {string} SPIRIT_TEMPLE_MAP_CHEST
 * @property {string} SPIRIT_TEMPLE_SUN_BLOCK_ROOM_CHEST
 * @property {string} SPIRIT_TEMPLE_SILVER_GAUNTLETS_CHEST
 * @property {string} SPIRIT_TEMPLE_COMPASS_CHEST
 * @property {string} SPIRIT_TEMPLE_EARLY_ADULT_RIGHT_CHEST
 * @property {string} SPIRIT_TEMPLE_FIRST_MIRROR_LEFT_CHEST
 * @property {string} SPIRIT_TEMPLE_FIRST_MIRROR_RIGHT_CHEST
 * @property {string} SPIRIT_TEMPLE_STATUE_ROOM_NORTHEAST_CHEST
 * @property {string} SPIRIT_TEMPLE_STATUE_ROOM_HAND_CHEST
 * @property {string} SPIRIT_TEMPLE_NEAR_FOUR_ARMOS_CHEST
 * @property {string} SPIRIT_TEMPLE_HALLWAY_RIGHT_INVISIBLE_CHEST
 * @property {string} SPIRIT_TEMPLE_HALLWAY_LEFT_INVISIBLE_CHEST
 * @property {string} SPIRIT_TEMPLE_MIRROR_SHIELD_CHEST
 * @property {string} SPIRIT_TEMPLE_BOSS_KEY_CHEST
 * @property {string} SPIRIT_TEMPLE_TOPMOST_CHEST
 * @property {string} SPIRIT_TEMPLE_TWINROVA_HEART
 * @property {string} ICE_CAVERN_MAP_CHEST
 * @property {string} ICE_CAVERN_COMPASS_CHEST
 * @property {string} ICE_CAVERN_IRON_BOOTS_CHEST
 * @property {string} ICE_CAVERN_FREESTANDING_POH
 * @property {string} GERUDO_TRAINING_GROUND_LOBBY_LEFT_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_LOBBY_RIGHT_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_STALFOS_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_BEFORE_HEAVY_BLOCK_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_HEAVY_BLOCK_FIRST_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_HEAVY_BLOCK_SECOND_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_HEAVY_BLOCK_THIRD_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_HEAVY_BLOCK_FOURTH_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_EYE_STATUE_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_NEAR_SCARECROW_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_HAMMER_ROOM_CLEAR_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_HAMMER_ROOM_SWITCH_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_FREESTANDING_KEY
 * @property {string} GERUDO_TRAINING_GROUND_MAZE_RIGHT_CENTRAL_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_MAZE_RIGHT_SIDE_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_UNDERWATER_SILVER_RUPEE_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_BEAMOS_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_HIDDEN_CEILING_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_MAZE_PATH_FIRST_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_MAZE_PATH_SECOND_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_MAZE_PATH_THIRD_CHEST
 * @property {string} GERUDO_TRAINING_GROUND_MAZE_PATH_FINAL_CHEST
 * @property {string} GANONS_CASTLE_FOREST_TRIAL_CHEST
 * @property {string} GANONS_CASTLE_WATER_TRIAL_LEFT_CHEST
 * @property {string} GANONS_CASTLE_WATER_TRIAL_RIGHT_CHEST
 * @property {string} GANONS_CASTLE_SHADOW_TRIAL_FRONT_CHEST
 * @property {string} GANONS_CASTLE_SHADOW_TRIAL_GOLDEN_GAUNTLETS_CHEST
 * @property {string} GANONS_CASTLE_LIGHT_TRIAL_FIRST_LEFT_CHEST
 * @property {string} GANONS_CASTLE_LIGHT_TRIAL_SECOND_LEFT_CHEST
 * @property {string} GANONS_CASTLE_LIGHT_TRIAL_THIRD_LEFT_CHEST
 * @property {string} GANONS_CASTLE_LIGHT_TRIAL_FIRST_RIGHT_CHEST
 * @property {string} GANONS_CASTLE_LIGHT_TRIAL_SECOND_RIGHT_CHEST
 * @property {string} GANONS_CASTLE_LIGHT_TRIAL_THIRD_RIGHT_CHEST
 * @property {string} GANONS_CASTLE_LIGHT_TRIAL_INVISIBLE_ENEMIES_CHEST
 * @property {string} GANONS_CASTLE_LIGHT_TRIAL_LULLABY_CHEST
 * @property {string} GANONS_CASTLE_SPIRIT_TRIAL_CRYSTAL_SWITCH_CHEST
 * @property {string} GANONS_CASTLE_SPIRIT_TRIAL_INVISIBLE_CHEST
 * @property {string} GANONS_TOWER_BOSS_KEY_CHEST
 */
const checks = createEnum(
    'Links Pocket',
    'Queen Gohma',
    'King Dodongo',
    'Barinade',
    'Phantom Ganon',
    'Volvagia',
    'Morpha',
    'Bongo Bongo',
    'Twinrova',
    'Song from Impa',
    'Song from Malon',
    'Song from Saria',
    'Song from Royal Familys Tomb',
    'Song from Ocarina of Time',
    'Song from Windmill',
    'Sheik in Forest',
    'Sheik in Crater',
    'Sheik in Ice Cavern',
    'Sheik at Colossus',
    'Sheik in Kakariko',
    'Sheik at Temple',
    'KF Midos Top Left Chest',
    'KF Midos Top Right Chest',
    'KF Midos Bottom Left Chest',
    'KF Midos Bottom Right Chest',
    'KF Kokiri Sword Chest',
    'KF Storms Grotto Chest',
    'LW Ocarina Memory Game',
    'LW Target in Woods',
    'LW Near Shortcuts Grotto Chest',
    'Deku Theater Skull Mask',
    'Deku Theater Mask of Truth',
    'LW Skull Kid',
    'LW Deku Scrub Near Bridge',
    'LW Deku Scrub Grotto Front',
    'SFM Wolfos Grotto Chest',
    'HF Near Market Grotto Chest',
    'HF Tektite Grotto Freestanding PoH',
    'HF Southeast Grotto Chest',
    'HF Open Grotto Chest',
    'HF Deku Scrub Grotto',
    'Market Shooting Gallery Reward',
    'Market Bombchu Bowling First Prize',
    'Market Bombchu Bowling Second Prize',
    'Market Lost Dog',
    'Market Treasure Chest Game Reward',
    'Market 10 Big Poes',
    'ToT Light Arrows Cutscene',
    'HC Great Fairy Reward',
    'LLR Talons Chickens',
    'LLR Freestanding PoH',
    'Kak Anju as Child',
    'Kak Anju as Adult',
    'Kak Impas House Freestanding PoH',
    'Kak Windmill Freestanding PoH',
    'Kak Man on Roof',
    'Kak Open Grotto Chest',
    'Kak Redead Grotto Chest',
    'Kak Shooting Gallery Reward',
    'Kak 10 Gold Skulltula Reward',
    'Kak 20 Gold Skulltula Reward',
    'Kak 30 Gold Skulltula Reward',
    'Kak 40 Gold Skulltula Reward',
    'Kak 50 Gold Skulltula Reward',
    'Graveyard Shield Grave Chest',
    'Graveyard Heart Piece Grave Chest',
    'Graveyard Royal Familys Tomb Chest',
    'Graveyard Freestanding PoH',
    'Graveyard Dampe Gravedigging Tour',
    'Graveyard Dampe Race Hookshot Chest',
    'Graveyard Dampe Race Freestanding PoH',
    'DMT Freestanding PoH',
    'DMT Chest',
    'DMT Storms Grotto Chest',
    'DMT Great Fairy Reward',
    'DMT Biggoron',
    'GC Darunias Joy',
    'GC Pot Freestanding PoH',
    'GC Rolling Goron as Child',
    'GC Rolling Goron as Adult',
    'GC Maze Left Chest',
    'GC Maze Center Chest',
    'GC Maze Right Chest',
    'DMC Volcano Freestanding PoH',
    'DMC Wall Freestanding PoH',
    'DMC Upper Grotto Chest',
    'DMC Great Fairy Reward',
    'ZR Open Grotto Chest',
    'ZR Frogs in the Rain',
    'ZR Frogs Ocarina Game',
    'ZR Near Open Grotto Freestanding PoH',
    'ZR Near Domain Freestanding PoH',
    'ZD Diving Minigame',
    'ZD Chest',
    'ZD King Zora Thawed',
    'ZF Great Fairy Reward',
    'ZF Iceberg Freestanding PoH',
    'ZF Bottom Freestanding PoH',
    'LH Underwater Item',
    'LH Child Fishing',
    'LH Adult Fishing',
    'LH Lab Dive',
    'LH Freestanding PoH',
    'LH Sun',
    'GV Crate Freestanding PoH',
    'GV Waterfall Freestanding PoH',
    'GV Chest',
    'GF Chest',
    'GF HBA 1000 Points',
    'GF HBA 1500 Points',
    'Wasteland Chest',
    'Colossus Great Fairy Reward',
    'Colossus Freestanding PoH',
    'OGC Great Fairy Reward',
    'Deku Tree Map Chest',
    'Deku Tree Slingshot Room Side Chest',
    'Deku Tree Slingshot Chest',
    'Deku Tree Compass Chest',
    'Deku Tree Compass Room Side Chest',
    'Deku Tree Basement Chest',
    'Deku Tree Queen Gohma Heart',
    'Dodongos Cavern Map Chest',
    'Dodongos Cavern Compass Chest',
    'Dodongos Cavern Bomb Flower Platform Chest',
    'Dodongos Cavern Bomb Bag Chest',
    'Dodongos Cavern End of Bridge Chest',
    'Dodongos Cavern Boss Room Chest',
    'Dodongos Cavern King Dodongo Heart',
    'Jabu Jabus Belly Boomerang Chest',
    'Jabu Jabus Belly Map Chest',
    'Jabu Jabus Belly Compass Chest',
    'Jabu Jabus Belly Barinade Heart',
    'Bottom of the Well Front Left Fake Wall Chest',
    'Bottom of the Well Front Center Bombable Chest',
    'Bottom of the Well Back Left Bombable Chest',
    'Bottom of the Well Underwater Left Chest',
    'Bottom of the Well Freestanding Key',
    'Bottom of the Well Compass Chest',
    'Bottom of the Well Center Skulltula Chest',
    'Bottom of the Well Right Bottom Fake Wall Chest',
    'Bottom of the Well Fire Keese Chest',
    'Bottom of the Well Like Like Chest',
    'Bottom of the Well Map Chest',
    'Bottom of the Well Underwater Front Chest',
    'Bottom of the Well Invisible Chest',
    'Bottom of the Well Lens of Truth Chest',
    'Forest Temple First Room Chest',
    'Forest Temple First Stalfos Chest',
    'Forest Temple Raised Island Courtyard Chest',
    'Forest Temple Map Chest',
    'Forest Temple Well Chest',
    'Forest Temple Eye Switch Chest',
    'Forest Temple Boss Key Chest',
    'Forest Temple Floormaster Chest',
    'Forest Temple Red Poe Chest',
    'Forest Temple Bow Chest',
    'Forest Temple Blue Poe Chest',
    'Forest Temple Falling Ceiling Room Chest',
    'Forest Temple Basement Chest',
    'Forest Temple Phantom Ganon Heart',
    'Fire Temple Near Boss Chest',
    'Fire Temple Flare Dancer Chest',
    'Fire Temple Boss Key Chest',
    'Fire Temple Big Lava Room Lower Open Door Chest',
    'Fire Temple Big Lava Room Blocked Door Chest',
    'Fire Temple Boulder Maze Lower Chest',
    'Fire Temple Boulder Maze Side Room Chest',
    'Fire Temple Map Chest',
    'Fire Temple Boulder Maze Shortcut Chest',
    'Fire Temple Boulder Maze Upper Chest',
    'Fire Temple Scarecrow Chest',
    'Fire Temple Compass Chest',
    'Fire Temple Megaton Hammer Chest',
    'Fire Temple Highest Goron Chest',
    'Fire Temple Volvagia Heart',
    'Water Temple Compass Chest',
    'Water Temple Map Chest',
    'Water Temple Cracked Wall Chest',
    'Water Temple Torches Chest',
    'Water Temple Boss Key Chest',
    'Water Temple Central Pillar Chest',
    'Water Temple Central Bow Target Chest',
    'Water Temple Longshot Chest',
    'Water Temple River Chest',
    'Water Temple Dragon Chest',
    'Water Temple Morpha Heart',
    'Shadow Temple Map Chest',
    'Shadow Temple Hover Boots Chest',
    'Shadow Temple Compass Chest',
    'Shadow Temple Early Silver Rupee Chest',
    'Shadow Temple Invisible Blades Visible Chest',
    'Shadow Temple Invisible Blades Invisible Chest',
    'Shadow Temple Falling Spikes Lower Chest',
    'Shadow Temple Falling Spikes Upper Chest',
    'Shadow Temple Falling Spikes Switch Chest',
    'Shadow Temple Invisible Spikes Chest',
    'Shadow Temple Freestanding Key',
    'Shadow Temple Wind Hint Chest',
    'Shadow Temple After Wind Enemy Chest',
    'Shadow Temple After Wind Hidden Chest',
    'Shadow Temple Spike Walls Left Chest',
    'Shadow Temple Boss Key Chest',
    'Shadow Temple Invisible Floormaster Chest',
    'Shadow Temple Bongo Bongo Heart',
    'Spirit Temple Child Bridge Chest',
    'Spirit Temple Child Early Torches Chest',
    'Spirit Temple Child Climb North Chest',
    'Spirit Temple Child Climb East Chest',
    'Spirit Temple Map Chest',
    'Spirit Temple Sun Block Room Chest',
    'Spirit Temple Silver Gauntlets Chest',
    'Spirit Temple Compass Chest',
    'Spirit Temple Early Adult Right Chest',
    'Spirit Temple First Mirror Left Chest',
    'Spirit Temple First Mirror Right Chest',
    'Spirit Temple Statue Room Northeast Chest',
    'Spirit Temple Statue Room Hand Chest',
    'Spirit Temple Near Four Armos Chest',
    'Spirit Temple Hallway Right Invisible Chest',
    'Spirit Temple Hallway Left Invisible Chest',
    'Spirit Temple Mirror Shield Chest',
    'Spirit Temple Boss Key Chest',
    'Spirit Temple Topmost Chest',
    'Spirit Temple Twinrova Heart',
    'Ice Cavern Map Chest',
    'Ice Cavern Compass Chest',
    'Ice Cavern Iron Boots Chest',
    'Ice Cavern Freestanding PoH',
    'Gerudo Training Ground Lobby Left Chest',
    'Gerudo Training Ground Lobby Right Chest',
    'Gerudo Training Ground Stalfos Chest',
    'Gerudo Training Ground Before Heavy Block Chest',
    'Gerudo Training Ground Heavy Block First Chest',
    'Gerudo Training Ground Heavy Block Second Chest',
    'Gerudo Training Ground Heavy Block Third Chest',
    'Gerudo Training Ground Heavy Block Fourth Chest',
    'Gerudo Training Ground Eye Statue Chest',
    'Gerudo Training Ground Near Scarecrow Chest',
    'Gerudo Training Ground Hammer Room Clear Chest',
    'Gerudo Training Ground Hammer Room Switch Chest',
    'Gerudo Training Ground Freestanding Key',
    'Gerudo Training Ground Maze Right Central Chest',
    'Gerudo Training Ground Maze Right Side Chest',
    'Gerudo Training Ground Underwater Silver Rupee Chest',
    'Gerudo Training Ground Beamos Chest',
    'Gerudo Training Ground Hidden Ceiling Chest',
    'Gerudo Training Ground Maze Path First Chest',
    'Gerudo Training Ground Maze Path Second Chest',
    'Gerudo Training Ground Maze Path Third Chest',
    'Gerudo Training Ground Maze Path Final Chest',
    'Ganons Castle Forest Trial Chest',
    'Ganons Castle Water Trial Left Chest',
    'Ganons Castle Water Trial Right Chest',
    'Ganons Castle Shadow Trial Front Chest',
    'Ganons Castle Shadow Trial Golden Gauntlets Chest',
    'Ganons Castle Light Trial First Left Chest',
    'Ganons Castle Light Trial Second Left Chest',
    'Ganons Castle Light Trial Third Left Chest',
    'Ganons Castle Light Trial First Right Chest',
    'Ganons Castle Light Trial Second Right Chest',
    'Ganons Castle Light Trial Third Right Chest',
    'Ganons Castle Light Trial Invisible Enemies Chest',
    'Ganons Castle Light Trial Lullaby Chest',
    'Ganons Castle Spirit Trial Crystal Switch Chest',
    'Ganons Castle Spirit Trial Invisible Chest',
    'Ganons Tower Boss Key Chest'
);

export default checks;
