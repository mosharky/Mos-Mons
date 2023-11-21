ServerEvents.recipes(e => {

    e.shapeless('minecraft:gunpowder', ['#forge:dusts/sulfur', 'salt:salt', '#minecraft:coals'])
    e.shapeless(Item.of('betterarcheology:rotten_planks', 2), 'betterarcheology:rotten_log')

    e.blasting('minecraft:glass', 'minecraft:sand')
    e.blasting('minecraft:stone', 'minecraft:cobblestone')


    // rats
    e.custom({
        type: 'rats:chef',
        count: 4,
        ingredient: Ingredient.of('brewinandchewin:flaxen_cheese_wedge').toJson(),
        result: 'rats:string_cheese'
    }).id('rats:chef/string_cheese')
    e.custom({
        type: 'rats:chef',
        count: 1,
        ingredient: Ingredient.of('rats:assorted_vegetables').toJson(),
        result: 'farmersdelight:ratatouille'
    }).id('rats:chef/confit_byaldi')
    e.custom({
        type: 'rats:chef',
        count: 8,
        ingredient: Ingredient.of('brewinandchewin:unripe_flaxen_cheese_wheel').toJson(),
        result: 'rats:blue_cheese'
    }).id('momo:chef/blue_cheese')
})
