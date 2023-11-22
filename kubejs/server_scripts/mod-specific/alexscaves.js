// priority: 8

// replaces the diving armor on spawn drowned spawn.
EntityEvents.spawned(event => {
    const entity = event.entity // just to make the next line shorter

    if (entity.type == 'minecraft:drowned') {
        if (entity.headArmorItem == 'alexscaves:diving_helmet') {
            entity.headArmorItem = 'create:copper_diving_helmet'
        }
        if (entity.feetArmorItem == 'alexscaves:diving_boots') {
            entity.feetArmorItem = 'create:copper_diving_boots'
        }
        if (entity.chestArmorItem == 'alexscaves:diving_chestplate') {
            entity.chestArmorItem = Item.of('create:copper_backtank', '{Air:900}')
        }
    }
})

// replaces diving armor on loot
LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .replaceLoot('alexscaves:diving_helmet', 'create:copper_diving_helmet', true)
        .replaceLoot('alexscaves:diving_chestplate', Item.of('create:copper_backtank', '{Air:900}'), true)
        .replaceLoot('alexscaves:diving_boots', 'create:copper_diving_boots', true)
})

// advancement to replace item detection with create armor
ServerEvents.highPriorityData(e => {
    e.addJson('alexscaves:advancements/alexscaves/diving_armor.json', {
        display: {
            icon: { item: 'create:copper_diving_helmet' },
            title: { translate: 'advancements.alexscaves.diving_armor.title' },
            description: { translate: 'advancements.alexscaves.diving_armor.desc' }
        },
        parent: 'alexscaves:alexscaves/discover_abyssal_ruins',
        criteria: {
            helmet: {
                trigger: 'minecraft:inventory_changed',
                conditions: { items: [{ items: ['create:copper_diving_helmet'] }] }
            },
            shirt: {
                trigger: 'minecraft:inventory_changed',
                conditions: { items: [{ items: ['create:copper_backtank'] }] }
            },
            pants: {
                trigger: 'minecraft:inventory_changed',
                conditions: { items: [{ items: ['alexscaves:diving_leggings'] }] }
            },
            boots: {
                trigger: 'minecraft:inventory_changed',
                conditions: { items: [{ items: ['create:copper_diving_boots'] }] }
            }
        }
    })
})

shapedRecipes.push({
    result: 'alexscaves:diving_leggings',
    id: 'mrg:shaped/diving_leggings',
    pattern: [
        'ACA',
        'K K',
        'C C'
    ],
    key: {
        A: 'create:andesite_alloy',
        C: '#forge:ingots/copper',
        K: 'minecraft:dried_kelp',
    }
})
