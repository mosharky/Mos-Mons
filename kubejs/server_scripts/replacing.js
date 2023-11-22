// priority: 8

ServerEvents.recipes(e =>{
    // cheese
    e.replaceInput({}, 'ad_astra:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceOutput({}, 'ad_astra:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceInput({}, 'ad_astra:cheese_block', 'brewinandchewin:flaxen_cheese_wheel')
    e.replaceInput({}, 'rats:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceOutput({}, 'rats:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceInput({}, 'rats:block_of_cheese', 'brewinandchewin:flaxen_cheese_wheel')
    e.replaceInput({}, 'rats:nether_cheese', 'brewinandchewin:scarlet_cheese_wedge')
    e.replaceInput({}, 'rats:block_of_nether_cheese', 'brewinandchewin:scarlet_cheese_wheel')
    // rats
    e.replaceInput({ not: { id: 'rats:upgrades/chicken_mount_upgrade' } }, 'rats:feathery_wing', 'alexsmobs:cockroach_wing')
    // other
    e.replaceInput({}, 'minecraft:milk_bucket', '#forge:milk')
    e.replaceInput({}, 'farmersdelight:wheat_dough', 'create:dough')
    e.replaceOutput({}, 'farmersdelight:wheat_dough', 'create:dough')
    e.replaceInput({}, 'supplementaries:rope', 'farmersdelight:rope')
    e.replaceInput({}, 'beautify:rope', 'farmersdelight:rope')
    e.replaceInput({}, 'hauntedharvest:rotten_apple', 'domesticationinnovation:rotten_apple')

})

// replace cincinnasite armor with gold armor
EntityEvents.spawned(e => {
    const entity = e.entity
    if (entity.type == 'minecraft:wither_skeleton') {
        if (entity.headArmorItem == 'betternether:cincinnasite_helmet') {
            entity.headArmorItem = 'minecraft:golden_helmet'
        }
        if (entity.chestArmorItem == 'betternether:cincinnasite_chestplate') {
            entity.chestArmorItem = 'minecraft:golden_chestplate'
        }
        if (entity.legsArmorItem == 'betternether:cincinnasite_leggings') {
            entity.legsArmorItem = 'minecraft:golden_leggings'
        }
        if (entity.feetArmorItem == 'betternether:cincinnasite_boots') {
            entity.feetArmorItem = 'minecraft:golden_boots'
        }
    }
})