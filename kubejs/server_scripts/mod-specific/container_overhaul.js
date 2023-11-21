// priority: 8
// priority is at 8 to be able to replace before fullRemovals

ServerEvents.highPriorityData(e => {
    // disable these item container providers
    const disabledContainerProviders = [
        'barrel',
        'blast_furnace',
        'brewing_stand',
        'campfire',
        'chest',
        'dispenser',
        'dropper',
        'furnace',
        'hopper',
        'smoker',
        'soul_campfire',
        'trapped_chest'
    ]

    disabledContainerProviders.forEach(container => e.addJson(`minecraft:item_container_providers/${container}`, {type: 'easyshulkerboxes:none'}))

    // supplementaries sack
    e.addJson('supplementaries:item_container_providers/sack', {
        type: 'easyshulkerboxes:block_entity',
        any_game_mode: true,
        block_entity_type: 'minecraft:shulker_box',
        inventory_height: 2,
        inventory_width: 9
    })

    // coloured sacks
    global.colours.forEach(colour => {
        e.addJson(`suppsquared:item_container_providers/sack_${colour}`, {
            type: 'easyshulkerboxes:block_entity',
            any_game_mode: true,
            block_entity_type: 'minecraft:shulker_box',
            background_color: colour,
            inventory_height: 2,
            inventory_width: 9
        })
    })

    // shulker boxes
    e.addJson('ironshulkerbox:item_container_providers/iron_shulker_box', {
        type: 'easyshulkerboxes:block_entity',
        any_game_mode: true,
        block_entity_type: 'minecraft:shulker_box',
        filter_container_items: true,
        inventory_height: 6,
        inventory_width: 9
    })

    // coloured shulker boxes
    global.colours.forEach(colour => {
        e.addJson(`ironshulkerbox:item_container_providers/iron_shulker_box_${colour}`, {
            type: 'easyshulkerboxes:block_entity',
            any_game_mode: true,
            block_entity_type: 'minecraft:shulker_box',
            background_color: colour,
            filter_container_items: true,
            inventory_height: 6,
            inventory_width: 9
        })
    })
})

ServerEvents.recipes(e => {

    shapedRecipes.push({
        result: 'ironshulkerbox:iron_shulker_box',
        id: 'kubejs:shaped/shulker_box',
        pattern: [
            ' A ',
            'ABA',
            ' A '
        ],
        key: {
            A: 'minecraft:shulker_shell',
            B: '#forge:chest'
        }
    })

    // TODO: check if i need this, or if this is wacky
    e.replaceInput({}, 'minecraft:shulker_box', 'ironshulkerbox:iron_shulker_box')
    e.replaceOutput({}, 'minecraft:shulker_box', 'ironshulkerbox:iron_shulker_box')

    global.colours.forEach(colour => {
        e.shapeless(`ironshulkerbox:iron_shulker_box_${colour}`, ['ironshulkerbox:iron_shulker_box', `minecraft:${colour}_dye`])
            .id(`kubejs:shaped/${colour}_shulker_box`)
            .modifyResult((grid, result) => {
                let item = grid.find(Item.of('ironshulkerbox:iron_shulker_box'))
                return result.withNBT(item.nbt)
            })

        e.replaceInput({}, `minecraft:${colour}_shulker_box`, `ironshulkerbox:iron_shulker_box_${colour}`)
        e.replaceOutput({}, `minecraft:${colour}_shulker_box`, `ironshulkerbox:iron_shulker_box_${colour}`)
    })
})

LootJS.modifiers(e => {
    e.addLootTableModifier(/.*/).replaceLoot('minecraft:shulker_box', 'ironshulkerbox:iron_shulker_box')

    global.colours.forEach(colour => {
        e.addLootTableModifier(/.*/).replaceLoot(`minecraft:${colour}_shulker_box`, `ironshulkerbox:iron_shulker_box_${colour}`)
    })
})
