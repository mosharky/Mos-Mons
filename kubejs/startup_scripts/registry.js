StartupEvents.registry('item', e => {
    e.create('no_flight_challenge_token')
        .tooltip(Text.gray('Use at the No Flight headquarters.'))
        .rarity('rare')
})

StartupEvents.registry('fluid', e => {
    // https://github.com/architectury/architectury-api/blob/1.20/common/src/main/java/dev/architectury/core/fluid/SimpleArchitecturyFluidAttributes.java

    let moltenZinc = e.create('molten_zinc').displayName('Molten Zinc').thickTexture(0xD5EEE7).bucketColor(0xD5EEE7)
    moltenZinc.attributes = moltenZinc.createAttributes()
        .dropOff(2)
        .slopeFindDistance(2)
        .tickDelay(30)
        // these dont do anything
        .density(3000)
        .viscosity(6000)
        .temperature(1100)
        .luminosity(12)
    // .fillSound(SoundEvents.BUCKET_FILL_LAVA)
    // .emptySound(SoundEvents.BUCKET_EMPTY_LAVA)

    let moltenBrass = e.create('molten_brass').displayName('Molten Brass').thickTexture(0xFFF387).bucketColor(0xFFF387)
    moltenBrass.attributes = moltenBrass.createAttributes()
        .dropOff(2)
        .slopeFindDistance(2)
        .tickDelay(30)
        // these dont do anything
        .density(3000)
        .viscosity(6000)
        .temperature(1100)
        .luminosity(12)
    // .fillSound(SoundEvents.BUCKET_FILL_LAVA)
    // .emptySound(SoundEvents.BUCKET_EMPTY_LAVA)
})


// item modification
ItemEvents.modification(e => {
    global.ironShulkerBoxes.forEach(box => {
        e.modify(box, item => {
            item.maxStackSize = 1
        })
    })

    e.modify('rats:potato_knishes', item => {
        item.foodProperties = food => {
            food
                .hunger(8)
                .saturation(0.8)
                .removeEffect('rats:synesthesia')
                .effect('farmersdelight:nourishment', 1200, 0, 1)
        }
    })

    e.modify('rats:rat_burger', item => {
        item.foodProperties = food => {
            food
                .hunger(8)
                .saturation(0.5)
        }
    })

    // rats armor nerfing
    e.modify('rats:ratlantis_helmet', item => item.armorProtection = 3)
    e.modify('rats:ratlantis_chestplate', item => item.armorProtection = 9)
    e.modify('rats:ratlantis_leggings', item => item.armorProtection = 6)
    e.modify('rats:ratlantis_boots', item => item.armorProtection = 3)
    // cataclysm armor nerfing
    e.modify('cataclysm:ignitium_helmet', item => item.armorProtection = 3)
    e.modify('cataclysm:ignitium_chestplate', item => item.armorProtection = 9)
    e.modify('cataclysm:ignitium_elytra_chestplate', item => item.armorProtection = 6)
    e.modify('cataclysm:ignitium_leggings', item => item.armorProtection = 6)
    e.modify('cataclysm:ignitium_boots', item => item.armorProtection = 3)
    // cataclysm items nerfing
    e.modify('cataclysm:gauntlent_of_guard', item => item.attackDamage = 8)
    e.modify('cataclysm:gauntlent_of_bulwark', item => item.attackDamage = 8)
    // TODO: why wont these work
    // e.modify('cataclysm:the_incinerator', item => item.attackDamage = 11)
    // e.modify('cataclysm:void_forge', item => item.attackDamage = 13)
    // e.modify('cataclysm:infernal_forge', item => item.attackDamage = 13)
})
