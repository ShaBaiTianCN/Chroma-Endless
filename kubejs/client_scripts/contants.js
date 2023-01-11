//priority: 1000

const refinedStorageItems = [
    'grid',
    'crafting_grid',
    'pattern_grid',
    'fluid_grid',
    'controller',
    'creative_controller',
    'network_receiver',
    'network_transmitter',
    'relay',
    'detector',
    'security_manager',
    'wireless_transmitter',
    'crafter',
    'crafting_monitor',
    'disk_manipulator',
    'crafter_manager'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'byg:dacite_cobblestone',
    'byg:ether_stone',
    'byg:purpur_stone',
    'byg:red_rock',
    'byg:scoria_cobblestone',
    'byg:soapstone',
    'create:andesite_cobblestone',
    'create:diorite_cobblestone',
    'create:granite_cobblestone',
    'quark:cobbedstone',
    'undergarden:depthrock',
    'undergarden:shiverstone',
    'undergarden:tremblecrust',
    'create:dark_scoria_cobblestone',
    'create:scoria_cobblestone',
    'create:gabbro_cobblestone',
    'create:dolomite_cobblestone',
    'create:weathered_limestone_cobblestone',
    'create:limestone_cobblestone',
    'atmospheric:saffron_travertine',
    'atmospheric:persimmon_travertine',
    'atmospheric:peach_travertine',
    'atmospheric:ivory_travertine'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer stonegens.
const generatableStone = [
    'minecraft:andesite',
    'minecraft:diorite',
    'minecraft:granite',
    'betterendforge:flavolite',
    'betterendforge:sulphuric_rock',
    'betterendforge:violecite',
    'byg:black_sandstone',
    'byg:blue_sandstone',
    'byg:dacite',
    'byg:purple_sandstone',
    'byg:pink_sandstone',
    'byg:scoria_stone',
    'byg:white_sandstone',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'quark:basalt',
    'quark:brimstone',
    'quark:jasper',
    'quark:limestone',
    'quark:marble',
    'quark:permafrost',
    'quark:slate',
    'create:dark_scoria',
    'create:scoria',
    'create:gabbro',
    'create:dolomite',
    'create:weathered_limestone',
    'create:limestone',
    'atmospheric:red_arid_sandstone',
    'atmospheric:arid_sandstone'
];
const generatableBasalt = [];

const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

const itemsToHide = [
    'aiotbotania:livingwood_shears',
    'aiotbotania:livingrock_shears',
    'aiotbotania:alfsteel_aiot',
    'aiotbotania:alfsteel_shovel',
    'aiotbotania:alfsteel_hoe',
    'aiotbotania:alfsteel_aiot',

    'powah:capacitor_basic_tiny',

    'ars_nouveau:arcane_brick',
    'ars_nouveau:arcane_ore',
    'ars_nouveau:mana_gem_block',

    'byg:budding_ametrine_ore',
    'byg:anthracite_ore',
    'byg:lignite_ore',
    'byg:cryptic_redstone_ore',
    'byg:blue_nether_gold_ore',
    'byg:blue_nether_quartz_ore',
    'byg:brimstone_nether_gold_ore',
    'byg:brimstone_nether_quartz_ore',

    'betterendforge:crystalline_sulphur',
    'betterendforge:sulphur_crystal',

    'create:powdered_obsidian',
    'create:honey_bucket',
    'create:copper_ore',
    'create:zinc_ore',

    'createdeco:netherite_nugget',
    'createdeco:zinc_sheet',

    'arsarsenal:aqua_hood',
    'arsarsenal:fire_hood',
    'arsarsenal:earth_hood',
    'arsarsenal:air_hood',

    // Masterfull machines
    'masterfulmachinery:assemblylaser_assembly_energy_port_energy_output',
    'masterfulmachinery:assemblylaser_assembly_air_port_pncr_pressure_output',
    'masterfulmachinery:compactfactory_compact_energy_port_energy_output',
    'masterfulmachinery:fusioner_compact_energy_port_energy_output',
    'masterfulmachinery:cuttingmachine_cuttingmachine_speed_port_create_rotation_output',
    'masterfulmachinery:endlessreactor_endless_air_port_pncr_pressure_output',
    'masterfulmachinery:endlessreactor_endless_energy_port_energy_input',
    'masterfulmachinery:endlessreactor_endless_fluid_port_fluids_output',
    'masterfulmachinery:endlessreactor_endless_speed_port_create_rotation_input',
    'masterfulmachinery:endlessreactor_endless_gas_port_mekanism_gas_output',
    'masterfulmachinery:autoinfuser_compound_fluid_port_fluids_output',
    'masterfulmachinery:autosmithing_autosmithing_energy_port_energy_output',

    'allthemodium:vibranium_allthemodium_alloy_dust',
    'allthemodium:unobtainium_vibranium_alloy_dust',
    'allthemodium:unobtainium_allthemodium_alloy_dust',

    'emendatusenigmatica:sulfur_ore',
    'emendatusenigmatica:dimensional_crushed',
    'emendatusenigmatica:arcane_crushed',
    'emendatusenigmatica:potassium_nitrate_crushed',
    'emendatusenigmatica:sulfur_crushed',
    'emendatusenigmatica:apatite_crushed',
    'emendatusenigmatica:cinnabar_crushed',
    'emendatusenigmatica:bitumen_crushed',
    'emendatusenigmatica:fluorite_crushed',
    'emendatusenigmatica:certus_quartz_crushed',
    'emendatusenigmatica:ancient_debris_crushed',
    'emendatusenigmatica:quartz_crushed',
    'emendatusenigmatica:redstone_crushed',
    'emendatusenigmatica:lapis_crushed',
    'emendatusenigmatica:emerald_crushed',
    'emendatusenigmatica:diamond_crushed',
    'emendatusenigmatica:coal_crushed',
    'emendatusenigmatica:nebu_crushed',
    'emendatusenigmatica:molten_zinc_bucket',
    'emendatusenigmatica:molten_uranium_bucket',
    'emendatusenigmatica:molten_tin_bucket',
    'emendatusenigmatica:molten_steel_bucket',
    'emendatusenigmatica:molten_silver_bucket',
    'emendatusenigmatica:molten_osmium_bucket',
    'emendatusenigmatica:molten_nickel_bucket',
    'emendatusenigmatica:molten_lead_bucket',
    'emendatusenigmatica:molten_iron_bucket',
    'emendatusenigmatica:molten_invar_bucket',
    'emendatusenigmatica:molten_gold_bucket',
    'emendatusenigmatica:molten_fluix_bucket',
    'emendatusenigmatica:molten_emerald_bucket',
    'emendatusenigmatica:molten_electrum_bucket',
    'emendatusenigmatica:molten_diamond_bucket',
    'emendatusenigmatica:molten_copper_bucket',
    'emendatusenigmatica:molten_constantan_bucket',
    'emendatusenigmatica:molten_cobalt_bucket',
    'emendatusenigmatica:molten_charged_certus_quartz_bucket',
    'emendatusenigmatica:molten_certus_quartz_bucket',
    'emendatusenigmatica:molten_bronze_bucket',
    'emendatusenigmatica:molten_brass_bucket',
    'emendatusenigmatica:molten_aluminum_bucket',
    'emendatusenigmatica:molten_ancient_debris_bucket',
    'emendatusenigmatica:molten_cloggrum_bucket',
    'emendatusenigmatica:molten_froststeel_bucket',
    'emendatusenigmatica:molten_utherium_bucket',
    'emendatusenigmatica:molten_regalium_bucket',
    'emendatusenigmatica:molten_iesnium_bucket',
    'emendatusenigmatica:molten_lumium_bucket',
    'emendatusenigmatica:molten_enderium_bucket',
    'emendatusenigmatica:molten_signalum_bucket',
    'emendatusenigmatica:molten_nebu_bucket',
    'emendatusenigmatica:nebu_dust',
    /iridium/,
    /cast_iron/,
    /peridot/,
    /emendatusenigmatica.*sapphire/,
    /emendatusenigmatica.*ruby/,
    /emendatusenigmatica.*fluix/,
    /ftblibrary:fluid_container/,

    'environmental:cherry_pie',
    'environmental:apple_pie',

    'farmersdelight:fried_egg',

    'immersiveengineering:dust_coke',
    'immersiveengineering:dust_saltpeter',
    'immersiveengineering:dust_wood',
    'immersiveengineering:coal_coke',

    'mctb:cherry_crafting_table',
    'mctb:dead_crafting_table',
    'mctb:fir_crafting_table',
    'mctb:hellbark_crafting_table',
    'mctb:jacaranda_crafting_table',
    'mctb:mahogany_crafting_table',
    'mctb:palm_crafting_table',
    'mctb:redwood_crafting_table',
    'mctb:umbran_crafting_table',
    'mctb:willow_crafting_table',
    'mctb:magic_crafting_table',

    'mekanism:fluorite_gem',

    'buildersaddition:iron_rod',

    // Deprecated Pedestals Items
    'pedestals:coin/fmagnetmodb',
    'pedestals:coin/fmagnetmod',
    'pedestals:coin/fmagnetitemstackb',
    'pedestals:coin/fluidpumpfilterblacklist',
    'pedestals:coin/fluidrelayblocked',
    'pedestals:coin/rfquarry',
    'pedestals:coin/rfquarryb',
    'pedestals:coin/rfrelayblocked',
    'pedestals:coin/xprelayblocked',
    'pedestals:coin/fmagnetitem',
    'pedestals:coin/fmagnetitemb',
    'pedestals:coin/fmagnetitemstack',
    'pedestals:coin/fluidpumpfilter',
    'pedestals:coin/fluidfilterblacklist',
    'pedestals:coin/fluidfilter',
    'pedestals:coin/enderfilteredexactimport',
    'pedestals:coin/enderfilteredfuzzyimport',
    'pedestals:coin/enderfilteredmodimport',
    'pedestals:coin/enderfilteredenchantedimport',
    'pedestals:coin/enderfilteredfoodimport',
    'pedestals:coin/fexportenchanted',
    'pedestals:coin/filterenchantedfuzzy',
    'pedestals:coin/filterenchantedfuzzyb',
    'pedestals:coin/filterenchantedexact',
    'pedestals:coin/filterenchantedexactb',
    'pedestals:coin/filterenchantedcount',
    'pedestals:coin/fexportitem',
    'pedestals:coin/fexportitemstack',
    'pedestals:coin/fexportmod',
    'pedestals:coin/fexportfood',
    'pedestals:coin/filterenchantedb',
    'pedestals:coin/filterenchanted',
    'pedestals:coin/filterdurabilityless',
    'pedestals:coin/filterdurability',
    'pedestals:coin/filterfoodb',
    'pedestals:coin/filterfood',
    'pedestals:coin/filtermodb',
    'pedestals:coin/filtermod',
    'pedestals:coin/filtertagb',
    'pedestals:coin/filtertag',
    'pedestals:coin/filteritemstackb',
    'pedestals:coin/filteritemstack',
    'pedestals:coin/filteritemb',
    'pedestals:coin/filteritem',
    'pedestals:coin/quarryb',
    'pedestals:coin/restriction',

    'bigreactors:yellorite_ore',
    'bigreactors:yellorium_nugget',
    'bigreactors:yellorium_dust',
    'bigreactors:yellorium_ingot',
    'bigreactors:yellorium_block',

    'createaddition:diamond_grit',
    'createaddition:copper_rod',
    'createaddition:iron_rod',
    'createaddition:gold_rod',
    'createaddition:brass_rod',
    'createaddition:zinc_sheet',
    'createaddition:copper_wire',

    'quark:biotite',
    'quark:biotite_ore',
    'quark:tallow',

    'refinedstorage:silicon',

    'shrink:shrink_ray',

    'simplefarming:apple_pie',
    'simplefarming:blueberry_pie',

    'supplementaries:pedestal',
    'supplementaries:crank',
    'supplementaries:turn_table',
    'supplementaries:stone_lamp',
    'supplementaries:sack',
    'supplementaries:blackboard',

    'tconstruct:copper_ore',
    'tconstruct:cobalt_ore',
    'tconstruct:copper_ingot',
    'tconstruct:cobalt_ingot',

    'thermal:coal_coke',
    'thermal:coal_coke_block',
    'thermal:ender_pearl_dust',
    'thermal:sawdust',
    'thermal:press_gear_die',
    'thermal:press_packing_3x3_die',
    'thermal:press_packing_2x2_die',
    'thermal:press_unpacking_die',
    'thermal:rubber',
    'thermal:niter',
    'thermal:cinnabar',
    'thermal:apatite',
    'thermal:sulfur',
    'thermal:ender',

    'quark:bonded_ravager_hide',
    'quark:ravager_hide',
    'quark:backpack',
    'quark:crate',
    'quark:magnet',
    'quark:soul_compass',

    /emendatusenigmatica:\w+_andesite_ore/,
    /emendatusenigmatica:\w+_gabbro_ore/,
    /emendatusenigmatica:\w+_c_limestone_ore/,
    /emendatusenigmatica:\w+_scoria_ore/,
    /emendatusenigmatica:\w+_weathered_limestone_ore/,
    /emendatusenigmatica:\w+_jasper_ore/,
    /emendatusenigmatica:\w+_marble_ore/,
    /emendatusenigmatica:\w+_slate_ore/,
    /emendatusenigmatica:\w+_netherrack_ore/,
    /emendatusenigmatica:\w+_blackstone_ore/,
    /emendatusenigmatica:\w+_deepslate_ore/,
    /emendatusenigmatica:\w+_end_stone_ore/,
    /emendatusenigmatica:\w+_mossy_stone_ore/,
    /emendatusenigmatica:\w+_granite_ore/,
    /emendatusenigmatica:\w+_diorite_ore/,
    /emendatusenigmatica:\w+_sand_ore/,
    /emendatusenigmatica:\w+_gravel_ore/,
    /emendatusenigmatica:\w+_violecite_ore/,
    /emendatusenigmatica:\w+_sulphuric_rock_ore/,
    /emendatusenigmatica:\w+_flavolite_ore/,
    /emendatusenigmatica:\w+_cryptic_stone_ore/,
    /emendatusenigmatica:\w+_ether_stone_ore/,
    /emendatusenigmatica:\w+_nylium_soul_soil_ore/,
    /emendatusenigmatica:\w+_subzero_ash_ore/,
    /emendatusenigmatica:\w+_brimstone_ore/,
    /emendatusenigmatica:\w+_soul_soil_ore/,
    /emendatusenigmatica:\w+_basalt_ore/,
    /emendatusenigmatica:certus/,
    /tconstruct:copper_(ore|block|nugget)/,
    /tconstruct:cobalt_(ore|block|nugget)/,
    /titanium:\w+_gear/,
    /thermal:\w+_dust/,
    /thermal:\w+_gear$/,
    /thermal:\w+_ingot/,
    /thermal:\w+_nugget/,
    /thermal:\w+_ore/,
    /thermal:\w+_plate/,
    /pedestals:dust/,
    /mekanism:\w+_ore/,
    /minecraft:\w+_ore/,
    /immersiveengineering:plate_/,
    /immersiveengineering:storage_/,
    /immersiveengineering:ore_/,
    /create:\w+_sheet/,
    /create:\w+_nugget/,
    /create:\w+_ingot/,
    /immersiveposts:stick_/,
    /byg:pendorite/,
    /byg:ametrine/,
    /emendatusenigmatica:\w+certus/,
    /emendatusenigmatica:\w+fluix/,
    /powah:\w+_starter/,
    /rftoolsbase:dimensionalshard_/,
    /theoneprobe:/,
    /upgrade_aquatic:\w+_jelly_torch/,
    /chiselsandbits:block_bit$/,

    'miniutilities:ender_dust',

    'custommachinery:machine_creator_item',
    'custommachinery:box_creator_item',
    Item.of('custommachinery:structure_creator', '{custommachinery:{}}'),

    Item.of('tconstruct:creative_slot', '{slot:"sensor"}'),
    Item.of('tconstruct:creative_slot', '{slot:"souls"}'),

    'kubejs:challenges',
    'kubejs:chunks',
    'kubejs:discord',
    'kubejs:sound_muffler',
    'kubejs:teams',
    'kubejs:website',

    'draconicadditions:chaos_heart',

    'mekanism:enriched_tin',

    'mob_grinding_utils:mob_swab',
    'mob_grinding_utils:dreadful_dirt',
    'mob_grinding_utils:delightful_dirt',
    'mob_grinding_utils:gm_chicken_feed',
    'mob_grinding_utils:gm_chicken_feed_cursed',
    'mob_grinding_utils:nutritious_chicken_feed',
    'mob_grinding_utils:spikes',
    'mob_grinding_utils:entity_spawner',
    'mob_grinding_utils:rotten_egg',
    'mob_grinding_utils:golden_egg',
    'mob_grinding_utils:mob_swab_used',

    'tardis:cinnabar',
    'tardis:cinnabar_ore',

    'ironfurnaces:crystal_furnace',
    'ironfurnaces:million_furnace',
    'ironfurnaces:rainbow_core',
    'ironfurnaces:rainbow_plating',
    'ironfurnaces:upgrade_allthemodium',
    'ironfurnaces:upgrade_vibranium',
    'ironfurnaces:upgrade_unobtainium',
    'ironfurnaces:upgrade_iron',
    'ironfurnaces:upgrade_gold',
    'ironfurnaces:upgrade_diamond',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:upgrade_iron2',
    'ironfurnaces:upgrade_obsidian2',
    'ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_crystal',
    'ironfurnaces:upgrade_obsidian',
    'ironfurnaces:upgrade_emerald',
    'ironfurnaces:upgrade_silver2',
    'ironfurnaces:upgrade_netherite'
];

let ee_types = ['clump', 'crystal', 'dirty_dust', 'shard', 'fragment', 'gravel'];
ee_types.forEach((type) => {
    itemsToHide.push(
        `emendatusenigmatica:dimensional_${type}`,
        `emendatusenigmatica:arcane_${type}`,
        `emendatusenigmatica:potassium_nitrate_${type}`,
        `emendatusenigmatica:sulfur_${type}`,
        `emendatusenigmatica:apatite_${type}`,
        `emendatusenigmatica:cinnabar_${type}`,
        `emendatusenigmatica:bitumen_${type}`,
        `emendatusenigmatica:fluorite_${type}`,
        `emendatusenigmatica:certus_quartz_${type}`,
        `emendatusenigmatica:quartz_${type}`,
        `emendatusenigmatica:redstone_${type}`,
        `emendatusenigmatica:lapis_${type}`,
        `emendatusenigmatica:emerald_${type}`,
        `emendatusenigmatica:diamond_${type}`,
        `emendatusenigmatica:coal_${type}`,
        `emendatusenigmatica:sapphire_${type}`,
        `emendatusenigmatica:ruby_${type}`,
        `emendatusenigmatica:iridium_${type}`,
        `emendatusenigmatica:peridot_${type}`,
        `emendatusenigmatica:nebu_${type}`
    );
});

/*  This allows hiding individual recipes. It's used primarily for recipes displayed in Patchouli manuals
    that have been changed to use a different crafting type or that have been disabled. It allows creating a
    recipe pointer that will display in Patchouli but not in JEI.

    Use the logger in the jei_hide_recipes script to discover the correct CategoryID. They do not match the recipe type.
*/
const recipesToHide = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: [
            'apotheosis:hellshelf',
            'apotheosis:seashelf',
            'apotheosis:endshelf',
            'apotheosis:enchantment_library',
            'apotheosis:armor_head_book',
            'apotheosis:armor_chest_book',
            'apotheosis:armor_legs_book',
            'apotheosis:armor_feet_book',
            'apotheosis:bow_book',
            'apotheosis:fishing_rod_book',
            'apotheosis:digger_book',
            'apotheosis:weapon_book',
            'apotheosis:scrap_tome',
            'apotheosis:null_book',

            'ars_nouveau:arcane_stone',
            'ars_nouveau:crystallizer',
            'ars_nouveau:potion_melder',
            'ars_nouveau:volcanic_accumulator',
            'ars_nouveau:mana_condenser',
            'ars_nouveau:mycelial_sourcelink',
            'ars_nouveau:vitalic_sourcelink',
            'ars_nouveau:alchemical_sourcelink',
            'ars_nouveau:novice_hood',
            'ars_nouveau:novice_robes',
            'ars_nouveau:novice_leggings',
            'ars_nouveau:novice_boots',
            'ars_nouveau:apprentice_hood',
            'ars_nouveau:apprentice_robes',
            'ars_nouveau:apprentice_leggings',
            'ars_nouveau:apprentice_boots',
            'ars_nouveau:archmage_hood',
            'ars_nouveau:archmage_robes',
            'ars_nouveau:archmage_leggings',
            'ars_nouveau:archmage_boots',

            'botania:terrasteel_helmet',
            'botania:terrasteel_chestplate',
            'botania:terrasteel_leggings',
            'botania:terrasteel_boots',
            'botania:spark',
            'botania:mana_pylon',
            'botania:natura_pylon',
            'botania:apothecary_default',
            'botania:terra_plate',
            'botania:alfheim_portal',
            'botania:mana_ring',
            'botania:gaia_ingot',
            'botania:gaia_pylon',
            'botania:mining_ring',
            'botania:dodge_ring',
            'botania:swap_ring',
            'botania:water_ring',
            'botania:magnet_ring',
            'botania:aura_ring',
            'botania:pixie_ring',
            'botania:reach_ring',
            'botania:flighttiara_0',
            'botania:runic_altar',
            'botania:mana_spreader',
            'botania:elven_spreader',
            'botania:gaia_spreader',
            'botania:fel_pumpkin',
            'botania:blood_pendant',
            'botania:ender_dagger',
            'botania:brewery',
            'botania:thorn_chakram',
            'botania:flare_chakram',

            'pneumaticcraft:air_compressor',
            'pneumaticcraft:advanced_air_compressor',
            'pneumaticcraft:pressure_chamber_valve_x1',
            'pneumaticcraft:pressure_chamber_valve_x4',
            'pneumaticcraft:flux_compressor',
            'pneumaticcraft:printed_circuit_board',
            'pneumaticcraft:assembly_drill',
            'pneumaticcraft:assembly_laser',
            'pneumaticcraft:assembly_io_unit_import',
            'pneumaticcraft:assembly_io_unit_export',
            'pneumaticcraft:assembly_controller',
            'pneumaticcraft:assembly_platform',
            'pneumaticcraft:aerial_interface',
            'pneumaticcraft:spawner_extractor'
        ]
    },
    {
        category: 'ars_nouveau:apparatus',
        recipes_by_id: [
            'ars_nouveau:jar_of_light',
            'ars_nouveau:void_jar',
            'ars_elemental:air_focus',
            'ars_elemental:water_focus',
            'ars_elemental:earth_focus',
            'ars_elemental:fire_focus',
            'ars_elemental:necrotic_focus'
        ]
    },
    {
        category: 'botania:mana_pool',
        recipes_by_id: ['botania:mana_infusion/mana_powder_dust', 'botania:mana_infusion/mana_powder_dye']
    }
];

const disabledItems = [
    'abnormals_delight:adzuki_cake_slice',
    'abnormals_delight:banana_cake_slice',
    'abnormals_delight:cherry_pantry',
    'abnormals_delight:chocolate_cake_slice',
    'abnormals_delight:cooked_duck_fillet',
    'abnormals_delight:cooked_venison_shanks',
    'abnormals_delight:duck_fillet',
    'abnormals_delight:mint_cake_slice',
    'abnormals_delight:necromium_knife',
    'abnormals_delight:passionfruit_glazed_duck',
    'abnormals_delight:seared_venison',
    'abnormals_delight:silver_knife',
    'abnormals_delight:strawberry_cake_slice',
    'abnormals_delight:vanilla_cake_slice',
    'abnormals_delight:venison_shanks',
    'abnormals_delight:willow_pantry',
    'abnormals_delight:wisteria_pantry',

    'betterendforge:ender_dust',

    'blockcarpentry:frame_chest',
    'blockcarpentry:illusion_chest',

    'byg:ametrine_block',
    'byg:ametrine_boots',
    'byg:ametrine_chestplate',
    'byg:ametrine_gems',
    'byg:ametrine_helmet',
    'byg:ametrine_horse_armor',
    'byg:ametrine_leggings',
    'byg:ametrine_ore',
    'byg:pendorite_axe',
    'byg:pendorite_battleaxe',
    'byg:pendorite_block',
    'byg:pendorite_hoe',
    'byg:pendorite_horse_armor',
    'byg:pendorite_ore',
    'byg:pendorite_pickaxe',
    'byg:pendorite_scraps',
    'byg:pendorite_shovel',
    'byg:pendorite_sword',
    'byg:emeraldite_ore',
    'byg:emeraldite_shards',

    'create:dough',

    'decorative_blocks_abnormals:ender_brazier',

    'losttrinkets:magical_herbs',
    'losttrinkets:octopick',
    'losttrinkets:tea_leaf',
    'losttrinkets:book_o_enchanting',
    'losttrinkets:blaze_heart',
    'losttrinkets:turtle_shell',
    'losttrinkets:tha_cloud',
    'losttrinkets:rock_candy',
    'losttrinkets:mad_aura',

    /materialis:psimetal/,

    'mekanism:sawdust',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_lithium',

    'pedestals:dustflour',

    'pitg:green_dye',

    'pneumaticcraft:wheat_flour',

    'projecte:watch_of_flowing_time',
    'projectexpansion:matter_upgrader',

    'quark:pipe',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'quark:carrot_crate',

    'thermal:beetroot_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:sugar_cane_block',
    'thermal:apple_block',

    'simplefarming:raw_bacon',
    'simplefarming:cooked_bacon',
    'simplefarming:cooked_egg',
    'simplefarming:noodles',
    'simplefarming:chocolate',

    'storagedrawers:conversion_upgrade',

    'miniutilities:golden_lasso',

    'prefab:item_compressed_chest',

    'littlelogistics:chunk_loader_barge',
    'draconicmachinery:chunk_loader',
    'draconicmachinery:information_plate',
    'draconicmachinery:compact_energy_core',
    'draconicmachinery:wireless_activator',
    'draconicmachinery:anchor',
    'draconicadditions:inert_potato_helm',
    'draconicadditions:inert_potato_chest',
    'draconicadditions:inert_potato_legs',
    'draconicadditions:inert_potato_boots',

    'mekanism:upgrade_anchor'
];

const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'compressed_iron',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'coal',
    'charcoal',
    'obsidian',
    'ender',
    'fluix',
    'saltpeter',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'niter',
    'potassium_nitrate',
    'saltpeter',
    'apatite',
    'bitumen',
    'redstone',
    'glowstone',
    'arcane',
    'mana',
    'certus_quartz',
    'charged_certus_quartz',
    'iesnium',
    'dimensional',
    'cloggrum',
    'froststeel',
    'regalium',
    'utherium',
    'coal_coke',
    'amber',
    'cobalt',
    'queens_slime',
    'rose_gold',
    'tinkers_bronze',
    'knightslime',
    'slimesteel',
    'manyullyn',
    'hepatizon',
    'thallasium',
    'aeternium',
    'elementium',
    'gaia_spirit',
    'infused_iron',
    'manasteel',
    'terminite',
    'terrasteel',
    'energized_steel',
    'blazing',
    'niotic',
    'spirited',
    'nitro',
    'blaze'
];

const craftedBees = [
    'occultist',
    'blazing',
    'energized',
    'niotic',
    'nitro',
    'spirited',
    'uraninite',
    'elementium',
    'gaia',
    'manasteel',
    'terrasteel',
    'xion',
    'iron',
    'wither',
    'redstone',
    'emerald',
    'diamond',
    'cloggrum',
    'regalium',
    'utherium',
    'froststeel',
    'forgotten',
    'steel',
    'electrum',
    'uranium',
    'blaze',
    'copper',
    'aluminum',
    'silver',
    'lead',
    'nickel',
    'osmium',
    'cobalt',
    'nether_quartz',
    'tin',
    'zinc',
    'fluorite',
    'potassium',
    'bitumen',
    'enderium',
    'invar',
    'constantan',
    'lumium',
    'signalum',
    'bronze',
    'brass',
    'starry_lexxie',
    'yeti',
    'abbee',
    'kitten',
    'oreo',
    'swift_alloy',
    'drenched_iron',
    'refined_obsidian',
    'refined_glowstone',
    'source_steel',
    'slime',
    'ichor_slime',
    'sky_slime',
    'ender_slime',
    'thallasium',
    'terminite',
    'aeternium',
    'compressed_iron',
    'fairy',
    'draconium',
    'awakened',
    'chaotic',
    'guardian',
    'dragon',
    'ghast',
    'blizz',
    'blitz',
    'basalz',
    'fireite',
    'gold',
    'coal',
    'dungeon',
    'ender',
    'forest',
    'icy',
    'lapis',
    'pigman',
    'rgbee',
    'skeleton',
    'water',
    'zombie',
    'glowstone',
    'obsidian',
    'clay',
    'netherite',
    'manyullyn',
    'rose_gold',
    'hepatizon',
    'cyanite',
    'blutonium',
    'magentite',
    'ridiculite',
    'ludicrite',
    'inanite',
    'creeper',
    'rainbow_glass',
    'magma',
    'stone',
    'lava',
    'nether',
    'seared',
    'end',
    'experience',
    'gravel',
    'sand',
    'graphite',
    'soul_lava',
    'unobtainium',
    'vibranium',
    'allthemodium',
    'mystical',
    'chef'
];