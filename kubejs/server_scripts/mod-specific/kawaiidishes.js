ServerEvents.recipes(e => {
    // kawaii dishes nerfing
    // machining
    e.custom({
        type: 'kawaiidishes:coffee_machining',
        ingredients: [[
            { item: 'kawaiidishes:coffee_powder' },
            { item: 'create:bar_of_chocolate' },
            { item: 'minecraft:sugar' }
        ]],
        itemOnOutput: { item: 'kawaiidishes:mug' },
        milk: true,
        output: {
            item: 'kawaiidishes:cappuccino_coffee',
            nbt: '{mainEffect:{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:300,Id:0,ShowIcon:1b,ShowParticles:1b,"forge:id":"kawaiidishes:kawaii"},secondaryEffect:{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:600,Id:3,ShowIcon:1b,ShowParticles:1b,"forge:id":"minecraft:haste"}}',
        },
        ticks: 100,
        water: true,
    }).id('kawaiidishes:cappuccino_coffee_from_coffee_machining')
    e.custom({
        type: 'kawaiidishes:coffee_machining',
        ingredients: [[
            { item: 'kawaiidishes:coffee_powder' },
            { item: 'minecraft:sugar' },
            { item: 'create:bar_of_chocolate' }
        ]],
        itemOnOutput: { item: 'kawaiidishes:mug' },
        milk: true,
        output: {
            item: 'kawaiidishes:mocha_coffee',
            nbt: '{mainEffect:{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:300,Id:0,ShowIcon:1b,ShowParticles:1b,"forge:id":"kawaiidishes:kawaii"},secondaryEffect:{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:300,Id:10,ShowIcon:1b,ShowParticles:1b,"forge:id":"minecraft:regeneration"}}'
        },
        ticks: 100,
        water: true,
    }).id('kawaiidishes:mocha_coffee_from_coffee_machining')

    // pressing
    e.custom({
        type: 'kawaiidishes:coffee_pressing',
        ingredients: [[
            { item: 'kawaiidishes:expresso_coffee' },
            { item: 'minecraft:milk_bucket' },
            { item: 'create:bar_of_chocolate' }
        ]],
        output: { item: 'kawaiidishes:mocha_coffee' },
    }).id('kawaiidishes:mocha_coffee_from_coffee_pressing')
    e.custom({
        type: 'kawaiidishes:coffee_pressing',
        ingredients: [[
            { item: 'kawaiidishes:american_coffee' },
            { item: 'minecraft:milk_bucket' },
            { item: 'create:bar_of_chocolate' }
        ]],
        output: { item: 'kawaiidishes:cappuccino_coffee' },
    }).id('kawaiidishes:cappuccino_coffee_from_coffee_pressing')

    // ice cream machine
    e.custom({
        type: 'kawaiidishes:ice_cream_making',
        ingredients: [[
            { item: 'minecraft:snowball' },
            { item: 'create:bar_of_chocolate' }
        ]],
        itemOnOutput: { item: 'kawaiidishes:glass_cup' },
        output: {
            item: 'kawaiidishes:chocolate_ice_cream',
            nbt: '{mainEffect:{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:300,Id:12,ShowIcon:1b,ShowParticles:1b,"forge:id":"minecraft:fire_resistance"}}'
        },
        ticks: 100
    }).id('kawaiidishes:chocolate_ice_cream_from_ice_cream_maker')
    e.custom({
        type: 'kawaiidishes:ice_cream_making',
        ingredients: [[
            { item: 'minecraft:snowball' },
            { item: 'kawaiidishes:coffee_powder' },
            { item: 'create:bar_of_chocolate' },
            { item: 'minecraft:milk_bucket' },
        ]],
        itemOnOutput: { item: 'kawaiidishes:glass_cup' },
        output: {
            item: 'kawaiidishes:mocha_ice_cream',
            nbt: '{mainEffect:{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:300,Id:12,ShowIcon:1b,ShowParticles:1b,"forge:id":"minecraft:fire_resistance"}}'
        },
        ticks: 100
    }).id('kawaiidishes:mocha_ice_cream_from_ice_cream_maker')
    e.custom({
        type: 'kawaiidishes:ice_cream_making',
        ingredients: [[
            { item: 'minecraft:snowball' },
            { item: 'minecraft:sweet_berries' },
            { item: 'minecraft:milk_bucket' },
            { item: 'create:bar_of_chocolate' }
        ]],
        itemOnOutput: { item: 'kawaiidishes:glass_cup' },
        output: {
            item: 'kawaiidishes:napolitano_ice_cream',
            nbt: "{mainEffect:{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:\"minecraft:milk_bucket\"}],Duration:300,Id:12,ShowIcon:1b,ShowParticles:1b,\"forge:id\":\"minecraft:fire_resistance\"}}"
        },
        ticks: 100
    }).id('kawaiidishes:napolitano_ice_cream_from_ice_cream_maker')

    // blending
    e.custom({
        type: 'kawaiidishes:blending',
        ingredients: [[
            { item: 'create:bar_of_chocolate' },
            { item: 'kawaiidishes:condensed_milk' },
        ]],
        output: {
            count: 4,
            item: 'kawaiidishes:brigadeiro_mix',
            nbt: '{}',
        },
        ticks: 100,
    }).id('kawaiidishes:brigadeiro_mix_from_blending')
})