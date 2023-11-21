ServerEvents.recipes(e => {
    e.custom({
        type: 'farmersdelight:cutting',
        ingredients: [Ingredient.of('brewinandchewin:flaxen_cheese_wheel').toJson()],
        result: [Item.of('brewinandchewin:flaxen_cheese_wedge', 8).toJson()],
        tool: { tag: 'forge:tools/knives' }
    }).id('brewinandchewin:cutting/flaxen_cheese_wheel')

    e.custom({
        type: 'farmersdelight:cutting',
        ingredients: [Ingredient.of('brewinandchewin:scarlet_cheese_wheel').toJson()],
        result: [Item.of('brewinandchewin:scarlet_cheese_wedge', 8).toJson()],
        tool: { tag: 'forge:tools/knives' }
    }).id('brewinandchewin:cutting/scarlet_cheese_wheel')
})