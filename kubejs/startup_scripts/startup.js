// priority: 1

Platform.mods.kubejs.name = 'MRG'
Platform.mods.eidolon.name = 'Eidolon'
Platform.mods.ironshulkerbox.name = 'Minecraft'

// stuff that's fully removed
global.fullRemovals = [
    'ad_astra:cheese',
    'ad_astra:cheese_block',
    /rats:(confit_byaldi|upgrade_separator|upgrade_combiner|auto_curdler|block_of_cheese|cheese|nether_cheese|block_of_nether_cheese)/,
    /rats:rat_upgrade_(enchanter|disenchanter|combined|jury_rigged|time_manipulator|tick_accelerator)/,
    /betterend:(.*hammer|.*thallasium.*|.*terminite.*|.*aeternium.*|.*crystalite.*|.*template.*|.*bulb_lantern.*|end_stone_smelter|ender_ore|elytra_armored|crystalline_sulphur|leather_wrapped_stick|leather_stripe|end_stone_brick.*)/,
    /betterend:(andesite|diorite|granite|quartz|purpur|end_stone|blackstone)_lantern/,
    /betternether:cincinnasite_(shovel|axe|pickaxe|hoe|sword|shears|chestplate|boots|helmet|leggings|.*diamond.*)/,
    /betternether:(nether_lapis_ore|.*chair|.*stool|.*taburet|.*ladder|.*ruby.*|obsidian_brick.*)/,
    /handcrafted:(.*cupboard|stackable_book)/,
    'beautify:rope',
    'kawaiidishes:roasted_cocoa_beans',
    'kawaiidishes:dried_cocoa_beans',
    'kawaiidishes:cocoa_powder',
    'kawaiidishes:white_chocolate_bar',
    'kawaiidishes:dark_chocolate_bar',
    'kawaiidishes:milk_chocolate_bar',
    'kawaiidishes:chocolate_cookie', 
    'kawaiidishes:chocolate_cheese_cake', 
    'kawaiidishes:piece_of_chocolate_cheesecake',
    'kawaiidishes:piece_of_cheesecake',
    'kawaiidishes:cheese_cake', 
    'kawaiidishes:piece_of_honey_cheesecake', 
    'kawaiidishes:honey_cheese_cake', 
    'kawaiidishes:piece_of_cake', 
    'kawaiidishes:sweet_berry_cookie', 
    'kawaiidishes:honey_cookie', 
    'kawaiidishes:golden_cookie', 
    'farmersdelight:wheat_dough',
    'supplementaries:rope',
    /embers:(lead|silver)_(shovel|axe|pickaxe|hoe|sword)/,
    /embers:(iron|copper)_plate/,
    /ad_astra:.*/,
    /hearth_and_home:.*chimney/,
    /decorative_blocks:(thatch|stone_pillar|blockstate_copy_item)/,
    'create:calcite_pillar',
    'cataclysm:purpur_wall',
    // mod-specific/alexscaves
    'alexscaves:diving_helmet',
    'alexscaves:diving_boots',
    'alexscaves:diving_chestplate',
    // mod-specific/container_overhaul
    /ironshulkerbox:(?!iron).*/,
    /ironshulkerbox:.*upgrade.*/,
    /minecraft:.*shulker_box.*/,
    /enlightened_end:(.*irradium.*|nuclear_bomb|nuclear_furnace)/,
]

// list of stuff to replace from peoples inventories
global.inventoryReplacement = [
    { toReplace: 'iwannaskate:pizza_slice', replaceWith: 'brewinandchewin:cheese_pizza_slice', msg: false },
    { toReplace: 'hauntedharvest:rotten_apple', replaceWith: 'domesticationinnovation:rotten_apple' },
]

global.colours = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]

global.ironShulkerBoxes = ['ironshulkerbox:iron_shulker_box']
global.colours.forEach(colour => global.ironShulkerBoxes.push(`ironshulkerbox:iron_shulker_box_${colour}`))

// function that turns an item id into readable text
global.ingerland = (item) => {
    let modName = Platform.mods[item.split(':')[0]].name
    let itemName = Item.of(item).getDisplayName().getString().replace('[', '"').replace(']', '"')

    return `${modName}'s ${itemName}`
}
