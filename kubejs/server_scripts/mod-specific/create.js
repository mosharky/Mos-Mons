// https://github.com/Creators-of-Create/Create/tree/mc1.20.1/dev/src/generated/resources/data/create/recipes
ServerEvents.recipes(e => {

    // pressing
    e.recipes.createPressing('embers:silver_plate', '#forge:ingots/silver', ).id('kubejs:pressing/silver_ingot')
    e.recipes.createPressing( 'embers:lead_plate', '#forge:ingots/lead').id('kubejs:pressing/lead_ingot')
    e.recipes.createSplashing('betterarcheology:rotten_log', '#minecraft:logs').id('kubejs:splashing/logs')
    e.recipes.createSplashing( 'betterarcheology:rotten_planks', '#minecraft:planks').id('kubejs:splashing/planks')

    // woodType sawing
    e.remove({ id: /create:cutting.*/ })
    constructedWoodTypes.forEach(woodType => {
        if (woodType.logBlock != undefined) {
            // log to stripped log
            if (woodType.logBlockStripped != undefined && woodType.plankBlock != undefined) {
                e.recipes.createCutting(woodType.logBlockStripped, woodType.logBlock).processingTime(50).id(`kubejs:cutting/${woodType.logBlock.replace(':', '_')}`)
                e.recipes.createCutting(Item.of(woodType.plankBlock, 6), woodType.logBlockStripped).processingTime(20).id(`kubejs:cutting/${woodType.logBlockStripped.replace(':', '_')}`)
            }

            // wood to stripped wood
            if (woodType.woodBlock != undefined && woodType.woodBlockStripped != undefined && woodType.plankBlock != undefined) {
                e.recipes.createCutting(woodType.woodBlockStripped, woodType.woodBlock).processingTime(50).id(`kubejs:cutting/${woodType.woodBlock.replace(':', '_')}`)
                e.recipes.createCutting(Item.of(woodType.plankBlock, 6), woodType.woodBlockStripped).processingTime(50).id(`kubejs:cutting/${woodType.woodBlockStripped.replace(':', '_')}`)
            }
        }
    })
})