ServerEvents.recipes(e => {
    e.custom({
        type: 'eidolon:crucible',
        steps: [
            {
                items: [
                    Ingredient.of('#forge:dusts/sulfur').toJson(),
                    Ingredient.of('salt:salt' ).toJson(),
                ]
            },
            {
                stirs: 1,
                items: [Ingredient.of('#minecraft:coals').toJson()]
            }
        ],
        result: Item.of('minecraft:gunpowder', 2).toJson()
    }).id('eidolon:gunpowder_alchemy')
})