JEIEvents.hideItems(e => {
    e.hide(global.fullRemovals)
    e.hide([
        'ae2:facade',
        'obtrophies:trophy',
        // /.*spawn_egg/,
        // /eidolon:spawn.*/
    ])

    global.inventoryReplacement.forEach(r => e.hide(r.toReplace))
})

JEIEvents.removeCategories(e => {
    e.remove([
        'twilightforest:uncrafting',
        'rats:cauldron'
    ])
})

JEIEvents.removeRecipes(e => {
    // console.log(e.categoryIds)
    e.remove('minecraft:crafting', ['salt:salting'])
})

JEIEvents.information(e => {
    e.addItem('salt:salt', 'Combine with a food item to increase its food value.')
})

JEIEvents.addItems(e => {
    e.add('minecraft:bundle')
})

ItemEvents.tooltip(e => {
    e.add(global.fullRemovals, Text.red('DISABLED'))
    e.add('minecraft:ender_eye', Text.red('Disabled right-click until we\'re ready to fight the Ender Dragon.'))

    global.inventoryReplacement.forEach(replacement => {
        e.add(replacement.toReplace, Text.red(`Replaced with ${global.ingerland(replacement.replaceWith)}`))
    })
})
