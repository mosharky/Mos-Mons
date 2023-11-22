ServerEvents.recipes(e => {

    shapedRecipes.push(
        {
            result: 'rats:rat_upgrade_armor',
            id: 'rats:upgrades/armor_upgrade',
            pattern: [
                'ABA',
                'ACA',
                'AAA',
            ],
            key: {
                A: '#forge:storage_blocks/iron',
                B: 'minecraft:shield',
                C: 'rats:rat_upgrade_basic'
            }
        },
        {
            result: 'rats:dragon_wing',
            id: 'rats:dragon_wing',
            pattern: [
                'AAB',
                'CCA',
                '  C'
            ],
            key: {
                A: 'minecraft:blaze_powder',
                B: 'alexsmobs:cockroach_wing',
                C: 'minecraft:phantom_membrane'
            }
        },
        {
            result: 'rats:rat_upgrade_health',
            id: 'rats:upgrades/health_upgrade',
            pattern: [
                'ABC',
                'BDB',
                'EBE'
            ],
            key: {
                A: 'minecraft:heart_of_the_sea',
                B: 'minecraft:glistering_melon_slice',
                C: 'alexsmobs:soul_heart',
                D: 'rats:rat_upgrade_basic',
                E: 'minecraft:golden_apple'
            }
        },
        {
            result: 'supplementaries:quiver',
            pattern: [
                ' A ',
                'BCB',
                ' A '
            ],
            key: {
                A: 'minecraft:leather',
                B: '#forge:rope',
                C: 'minecraft:bundle'
            }
        },
        {
            result: Item.of('handcrafted:terracotta_cup', 3),
            id: 'handcrafted:terracotta_cup',
            pattern: [
                'A A',
                ' A '
            ],
            key: { A: 'minecraft:terracotta' }
        },
    )
    shapedRecipes.forEach(recipe => {
        recipe.id
            ? e.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id)
            : e.shaped(recipe.result, recipe.pattern, recipe.key)
    })
})