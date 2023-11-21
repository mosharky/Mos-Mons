// https://github.com/Creators-of-Create/Create/tree/mc1.20.1/dev/src/generated/resources/data/create/recipes
ServerEvents.recipes(e => {

    // crushing
    e.custom({
        type: 'create:crushing',
        ingredients: [Ingredient.of('ad_astra:moon_cheese_ore').toJson()],
        results: [
            { item: 'brewinandchewin:flaxen_cheese_wedge', count: 1 },
            { item: 'brewinandchewin:flaxen_cheese_wedge', count: 1, chance: 0.25 },
            { item: 'create:experience_nugget', count: 1, chance: 0.75 },
            { item: 'ad_astra:moon_cobblestone', count: 1, chance: 0.125 }
        ],
        processingTime: 300
    }).id('create:crushing/moon_cheese_ore')


    // pressing
    e.custom({
        type: 'create:pressing',
        ingredients: [Ingredient.of('#forge:ingots/silver').toJson()],
        results: [Item.of('embers:silver_plate').toJson()]
    }).id('kubejs:pressing/silver_ingot')

    e.custom({
        type: 'create:pressing',
        ingredients: [Ingredient.of('#forge:ingots/lead').toJson()],
        results: [Item.of('embers:lead_plate').toJson()]
    }).id('kubejs:pressing/lead_ingot')

    e.custom({
        type: 'create:splashing',
        ingredients: [Ingredient.of('#minecraft:logs').toJson()],
        results: [Item.of('betterarcheology:rotten_log').toJson()]
    })

    e.custom({
        type: 'create:splashing',
        ingredients: [Ingredient.of('#minecraft:planks').toJson()],
        results: [Item.of('betterarcheology:rotten_planks').toJson()]
    })


    // woodType sawing
    e.remove({ id: /create:cutting.*/ })
    constructedWoodTypes.forEach(woodType => {
        if (woodType.logBlock != undefined) {
            // log to stripped log
            if (woodType.logBlockStripped != undefined && woodType.plankBlock != undefined) {
                e.custom({
                    type: 'create:cutting',
                    ingredients: [Ingredient.of(woodType.logBlock).toJson()],
                    results: [Item.of(woodType.logBlockStripped).toJson()],
                    processingTime: 50
                })

                e.custom({
                    type: 'create:cutting',
                    ingredients: [Ingredient.of(woodType.logBlockStripped).toJson()],
                    results: [Item.of(woodType.plankBlock, 6).toJson()],
                    processingTime: 20
                })
            }

            if (woodType.woodBlockStripped != undefined && woodType.plankBlock != undefined) {
                e.custom({
                    type: 'create:cutting',
                    ingredients: [Ingredient.of(woodType.woodBlockStripped).toJson()],
                    results: [Item.of(woodType.plankBlock, 6).toJson()],
                    processingTime: 50
                })
            }
        }
    })
})