ServerEvents.highPriorityData(e => {
    e.addJson('kubejs:recipes/rotten_log.json', {
        type: 'lychee:item_inside',
        item_in: { tag: 'minecraft:logs' },
        block_in: {
            blocks: ['water_cauldron'],
            state: { level: 3 }
        },
        post: [
            { type: 'drop_item', item: 'betterarcheology:rotten_log' },
            { type: 'place', block: 'cauldron' }
        ],
        time: 16
    })

    e.addJson('kubejs:recipes/rotten_planks.json', {
        type: 'lychee:item_inside',
        item_in: { tag: 'minecraft:planks' },
        block_in: {
            blocks: ['water_cauldron'],
            state: { level: 3 }
        },
        post: [
            { type: 'drop_item', item: 'betterarcheology:rotten_planks' },
            { type: 'place', block: 'cauldron' }
        ],
        time: 4
    })
})