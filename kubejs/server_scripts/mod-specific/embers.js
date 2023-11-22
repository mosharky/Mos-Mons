ServerEvents.recipes(e => {
    // ⚠️ MELTING ⚠️
    // cincinnasite
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('betternether:cincinnasite').toJson(),
        bonus: Fluid.of('embers:molten_gold', 10).toJson(),
        output: Fluid.of('embers:molten_iron', 120).toJson()
    })
    // cincinnasite ingot
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('betternether:cincinnasite_ingot').toJson(),
        output: Fluid.of('embers:molten_iron', 90).toJson()
    })
    // cincinnasite ore
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('betternether:cincinnasite_ore').toJson(),
        bonus: Fluid.of('embers:molten_gold', 20).toJson(),
        output: Fluid.of('embers:molten_iron', 240).toJson()
    })
    // cincinnasite block
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('betternether:cincinnasite_block').toJson(),
        bonus: Fluid.of('embers:molten_gold', 40).toJson(),
        output: Fluid.of('embers:molten_iron', 480).toJson()
    })
    // cincinnasite forged
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('betternether:cincinnasite_forged').toJson(),
        output: Fluid.of('embers:molten_iron', 360).toJson()
    })


    // zinc
    // raw zinc
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:raw_zinc').toJson(),
        output: Fluid.of('kubejs:molten_zinc', 120).toJson()
    })
    // raw zinc block
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:raw_zinc_block').toJson(),
        output: Fluid.of('kubejs:molten_zinc', 1080).toJson()
    })
    // zinc ore
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('#forge:ores/zinc').toJson(),
        output: Fluid.of('kubejs:molten_zinc', 240).toJson()
    })
    // zinc ingot
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:zinc_ingot').toJson(),
        output: Fluid.of('kubejs:molten_zinc', 90).toJson()
    })
    // zinc block
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:zinc_block').toJson(),
        output: Fluid.of('kubejs:molten_zinc', 810).toJson()
    })
    // zinc nugget
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:zinc_nugget').toJson(),
        output: Fluid.of('kubejs:molten_zinc', 10).toJson()
    })
    // zinc sheet
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('createaddition:zinc_sheet').toJson(),
        output: Fluid.of('kubejs:molten_zinc', 90).toJson()
    })


    // brass
    // brass ingot
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:brass_ingot').toJson(),
        output: Fluid.of('kubejs:molten_brass', 90).toJson()
    })
    // brass block
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:brass_block').toJson(),
        output: Fluid.of('kubejs:molten_brass', 810).toJson()
    })
    // brass nugget
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:brass_nugget').toJson(),
        output: Fluid.of('kubejs:molten_brass', 10).toJson()
    })
    // brass sheet
    e.custom({
        type: 'embers:melting',
        input: Ingredient.of('create:brass_sheet').toJson(),
        output: Fluid.of('kubejs:molten_brass', 90).toJson()
    })


    // ⚠️ STAMPING ⚠️
    // zinc
    e.custom({
        type: 'embers:tag_stamping',
        fluid: { tag: 'forge:molten_zinc', amount: 90 },
        stamp: Ingredient.of('embers:ingot_stamp').toJson(),
        output: 'forge:ingots/zinc'
    })
    e.custom({
        type: 'embers:tag_stamping',
        fluid: { tag: 'forge:molten_zinc', amount: 10 },
        stamp: Ingredient.of('embers:nugget_stamp').toJson(),
        output: 'forge:nuggets/zinc'
    })
    e.custom({
        type: 'embers:tag_stamping',
        fluid: { tag: 'forge:molten_zinc', amount: 90 },
        stamp: Ingredient.of('embers:plate_stamp').toJson(),
        output: 'forge:plates/zinc'
    })

    // brass
    e.custom({
        type: 'embers:tag_stamping',
        fluid: { tag: 'forge:molten_brass', amount: 90 },
        stamp: Ingredient.of('embers:ingot_stamp').toJson(),
        output: 'forge:ingots/brass'
    })
    e.custom({
        type: 'embers:tag_stamping',
        fluid: { tag: 'forge:molten_brass', amount: 10 },
        stamp: Ingredient.of('embers:nugget_stamp').toJson(),
        output: 'forge:nuggets/brass'
    })
    e.custom({
        type: 'embers:tag_stamping',
        fluid: { tag: 'forge:molten_brass', amount: 90 },
        stamp: Ingredient.of('embers:plate_stamp').toJson(),
        output: 'forge:plates/brass'
    })



    // ⚠️ MIXING ⚠️
    e.custom({
        type: 'embers:mixing',
        inputs: [
            { tag: 'forge:molten_zinc', amount: 2 },
            { tag: 'forge:molten_copper', amount: 2 },
        ],
        output: Fluid.of('kubejs:molten_brass', 4).toJson()
    })
})