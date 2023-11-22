//priority: 7



ServerEvents.recipes(e => {
    // Removes inputs and outputs from global array fullRemoval
    global.fullRemovals.forEach(removal => {
        e.remove({ input: removal })
        e.remove({ output: removal })
    })

    // Removes by recipe ID
    let idRemovals = [
        'betternether:rail',
        'betternether:detector_rail',
        'betternether:activator_rail',
        'betternether:piston',
        'betternether:shield',
        'comforts:rope_and_nail',
        /embers:.*hammering/,
        'alexscaves:furnace/smooth_bone_smelting',
        'rats:cheese',
        'ad_astra:recipes/cheese',
        'salt:gunpowder',
        'alexscaves:gunpowder_from_sulfur',
        'embers:copper_nugget_to_ingot',
        /bclib:.*/,
        // mod-specific/container_overhaul
        /.*ironshulkerbox.*/,
    ]
    idRemovals.forEach(removal => {
        e.remove({ id: removal })
    })

    global.inventoryReplacement.forEach(replacement => {
        e.remove({ input: replacement.toReplace })
        e.remove({ output: replacement.toReplace })
    })
})


ServerEvents.tags('item', e => {
    let newArr = []
    global.fullRemovals.forEach(removal => {
        if (removal instanceof RegExp) {
            newArr = newArr.concat(Ingredient.of(removal).itemIds)
        } else newArr.push(removal)
    })
    global.inventoryReplacement.forEach(r => newArr.push(r.toReplace))
    newArr.forEach(removal => {
        e.removeAllTagsFrom(removal)
    })
})



/**
 * Removes advancement at given file-path and adds it to a hidden parent advancement
 * @param {String | Array} advancement - Advancement id (ie. lootr:100loot)
 */
function removeAdvancement(advancement) {
    let arr = []
    if (typeof (advancement) == 'string') arr = [advancement]
    else if (typeof (advancement) == 'object') arr = advancement
    else console.error(`Invalid type for removeAdvancement(${advancement})`)

    ServerEvents.highPriorityData(e => {
        e.addJson('mrg:advancements/removed', {
            display: {
                title: { text: 'Removed' },
                description: { text: 'Removed' },
                hidden: true
            }
        })
        arr.forEach(advancement => {
            let advSplit = advancement.split(':')
            let advModId = advSplit[0]
            let advName = advSplit[1]

            e.addJson(`${advModId}:advancements/${advName}`, {
                parent: 'mrg:advancements/removed',
                display: {
                    title: { text: 'Removed' },
                    description: { text: 'Removed' },
                    hidden: true
                },
                criteria: {
                    impossible: {
                        trigger: 'minecraft:impossible'
                    }
                },
                requirements: [['impossible']]
            })
        })
    })
}

// https://github.com/quiqueck/BetterEnd/tree/1.20/src/main/generated/data/betterend/advancements
// https://github.com/quiqueck/BetterNether/tree/1.20/src/main/generated/data/betternether/advancements
removeAdvancement([
    'lootr:1barrel',
    'lootr:1cart',
    'lootr:1chest',
    'lootr:1shulker',
    'lootr:10loot',
    'lootr:25loot',
    'lootr:50loot',
    'lootr:100loot',
    'lootr:root',
    'lootr:social',
    'betterend:aeternium_anvil',
    'betterend:aeternium_armor',
    'betterend:aeternium_hammer',
    'betterend:aeternium_hammer_head',
    'betterend:aeternium_plate',
    'betterend:aeternium_tool',
    'betterend:aeternium_tool_head',
    'betterend:all_elytras',
    'betterend:all_the_biomes',
    'betterend:all_the_templates',
    'betterend:enter_end',
    'betterend:hammer',
    'betterend:infusion',
    'betterend:infusion_finished',
    'betterend:portal',
    'betterend:portal_on',
    'betterend:portal_travel',
    'betterend:root',
    'betterend:terminite_anvil',
    'betterend:terminite_armor',
    'betterend:terminite_plate',
    'betterend:terminite_tool',
    'betterend:terminite_tool_head',
    'betterend:thallasium_anvil',
    'betterend:thallasium_armor',
    'betterend:thallasium_plate',
    'betterend:thallasium_tool',
    'betterend:thallasium_tool_head',
    'betterend:village',
    'betternether:all_the_biomes',
    'betternether:blue_obsidian',
    'betternether:cincinnasite_diamond',
    'betternether:cincinnasite_diamond_tools',
    'betternether:cincinnasite_forge',
    'betternether:cincinnasite_gear',
    'betternether:cincinnasite_ore',
    'betternether:cincinnasite_tools',
    'betternether:city',
    'betternether:enter_nether',
    'betternether:flaming_armor',
    'betternether:flaming_ruby',
    'betternether:flaming_tools',
    'betternether:make_crying',
    'betternether:nether_wood',
    'betternether:obsidian_blocks',
    'betternether:root',
    'betternether:ruby_gear',
    'betternether:ruby_ore',
    'betternether:ruby_tools'
])