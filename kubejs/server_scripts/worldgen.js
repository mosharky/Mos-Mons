const PLACED = 'placed'
const CONFIGURED = 'configured'


// worldgen tags
ServerEvents.tags('worldgen/biome', e => {


    /**
     * @param {String | Array} tag string tag or array of tags
     * @returns {Array}
     */
    function tagToArray(tags) {
        let finalArray = []
        if (Array.isArray(tags)) {
            tags.forEach(tag => {
                finalArray.push(e.get(tag).getObjectIds())
            })
        } else finalArray.push(e.get(tags).getObjectIds())

        return finalArray
    }


    // TODO: why tf dont these functions work
    // returns set of all things in tags array/set
    function tagUnion(tags) {
        let union = new Set()
        tags.forEach(tag => {
            e.get(tag).objectIds.forEach(element => {
                union.add(element)
            })
        })
        return union
    }

    // delete from set; deletions is an array/set
    function setDelete(deletions, set) {
        let newSet = new Set(set)
        deletions.forEach(deletion => {
            newSet.delete(deletion)
        })
        return newSet
    }

    // returns a set of shared elements between setA and setB
    function setIntersection(setA, setB) {
        let intersection = new Set()
        setB.forEach(element => {
            // if element is not in inclusionSet, then remove it
            if (setA.has(element)) {
                intersection.add(element)
            }
        })
        return intersection
    }



    e.removeAll('kawaiidishes:coffee_gen')
    e.add('kawaiidishes:coffee_gen', [
        '#minecraft:is_jungle',
        '#minecraft:is_savanna',
        '#forge:is_dry',
        '#forge:is_dry/overworld',
        'regions_unexplored:joshua_desert'
    ])

    e.removeAll('cobblemon:has_feature/apricorns_dense')
    e.add('cobblemon:has_feature/apricorns_dense', [
        'minecraft:forest',
        'minecraft:flower_forest',
        'minecraft:birch_forest',
        'minecraft:old_growth_birch_forest',
        'regions_unexplored:willow_forest',
        'regions_unexplored:autumnal_maple_forest',
        'regions_unexplored:maple_forest',
        'regions_unexplored:deciduous_forest',
        'regions_unexplored:silver_birch_forest',
    ])

    e.removeAll('cobblemon:has_feature/apricorns_normal')
    e.add('cobblemon:has_feature/apricorns_normal', [
        'minecraft:taiga',
        'minecraft:plains',
        'minecraft:sunflower_plains',
        'minecraft:meadow',
        'minecraft:windswept_forest',
        'minecraft:windswept_gravelly_hills',
        'minecraft:windswept_hills',
        'regions_unexplored:clover_plains',
        'regions_unexplored:fen',
        'regions_unexplored:cold_deciduous_forest',
        'regions_unexplored:orchard',
        'regions_unexplored:pine_taiga',
        'regions_unexplored:temperate_grove',
    ])

    e.removeAll('cobblemon:has_feature/apricorns_sparse')
    e.add('cobblemon:has_feature/apricorns_sparse', [
        'regions_unexplored:grassland',
        'regions_unexplored:highland_fields'
    ])

    e.add('cobblemon:has_feature/revival_herbs', [
        'regions_unexplored:ancient_delta'
    ])

    e.removeAll('cataclysm:has_structure/soul_black_smith_biomes')
    e.add('cataclysm:has_structure/soul_black_smith_biomes', [
        'minecraft:nether_wastes',
        'minecraft:warped_forest',
        'minecraft:soul_sand_valley',
        'regions_unexplored:blackstone_basin',
        'regions_unexplored:basalt_deltas',
        'betternether:poor_nether_grasslands',
        'betternether:bone_reef',
        'betternether:flooded_deltas',
        'betternether:gravel_desert',
        'betternether:nether_grasslands',
        'betternether:soul_plain',
        'betternether:upside_down_forest',
        'betternether:upside_down_forest_cleared',
        'betternether:wart_forest',
        'betternether:wart_forest_edge',
    ])

    // end biomes without the_end and small_end_islands
    e.removeAll('cataclysm:has_structure/ruined_citadel_biomes')
    e.add('cataclysm:has_structure/ruined_citadel_biomes', [
        'minecraft:end_highlands',
        'minecraft:end_midlands',
        'minecraft:end_barrens',
        'betterend:amber_land',
        'betterend:blossoming_spires',
        'betterend:chorus_forest',
        'betterend:crystal_mountains',
        'betterend:dragon_graveyards',
        'betterend:dry_shrubland',
        'betterend:dust_wastelands',
        'betterend:empty_aurora_cave',
        'betterend:empty_end_cave',
        'betterend:empty_smaragdant_cave',
        'betterend:foggy_mushroomland',
        'betterend:glowing_grasslands',
        'betterend:ice_starfield',
        'betterend:jade_cave',
        'betterend:lantern_woods',
        'betterend:lush_aurora_cave',
        'betterend:lush_smaragdant_cave',
        'betterend:megalake',
        'betterend:megalake_grove',
        'betterend:neon_oasis',
        'betterend:painted_mountains',
        'betterend:shadow_forest',
        'betterend:sulphur_springs',
        'betterend:umbra_valley',
        'betterend:umbrella_jungle',
    ])

    e.removeAll('cataclysm:has_structure/burning_arena_biomes')
    e.add('cataclysm:has_structure/burning_arena_biomes', [
        // just empty-ish biomes
        'minecraft:nether_wastes',
        'minecraft:soul_sand_valley',
        'regions_unexplored:blackstone_basin',
        'regions_unexplored:basalt_deltas',
        'betternether:poor_nether_grasslands',
        'betternether:bone_reef',
        'betternether:gravel_desert',
        'betternether:nether_grasslands',
        'betternether:soul_plain',
        'betternether:upside_down_forest',
        'betternether:upside_down_forest_cleared',
        'betternether:wart_forest',
        'betternether:wart_forest_edge',
    ])

    e.removeAll('betterarcheology:has_structure/archeologist_camp_grassy')
    e.add('betterarcheology:has_structure/archeologist_camp_grassy',
        tagToArray(['minecraft:is_forest', 'minecraft:is_taiga', 'forge:is_plains'])
    )

    e.removeAll('betterarcheology:has_structure/archeologist_camp_redsand')
    e.add('betterarcheology:has_structure/archeologist_camp_redsand',
        tagToArray('minecraft:is_badlands').concat(['regions_unexplored:outback'])
    )

    e.removeAll('betterarcheology:has_structure/archeologist_camp_sand')
    e.add('betterarcheology:has_structure/archeologist_camp_sand', [
        'minecraft:desert',
        'regions_unexplored:joshua_desert',
        'regions_unexplored:saguaro_desert',
    ])

    e.removeAll('betterarcheology:has_structure/buried_ruins_sand')
    e.add('betterarcheology:has_structure/buried_ruins_sand', [
        'minecraft:desert',
        'regions_unexplored:joshua_desert',
        'regions_unexplored:saguaro_desert',
    ])

    e.removeAll('betterarcheology:has_structure/ruins_sand')
    e.add('betterarcheology:has_structure/ruins_sand', [
        'minecraft:desert',
        'regions_unexplored:joshua_desert',
        'regions_unexplored:saguaro_desert',
    ])

    e.removeAll('betterarcheology:has_structure/desert_obelisk')
    e.add('betterarcheology:has_structure/desert_obelisk', [
        'minecraft:desert',
        'regions_unexplored:joshua_desert',
        'regions_unexplored:saguaro_desert',
    ])

    e.add('betterarcheology:has_structure/fossil_chicken', [
        'minecraft:forest',
        'minecraft:plains',
        'minecraft:sunflower_plains',
        'regions_unexplored:orchard',
        'regions_unexplored:deciduous_forest',
    ])


    e.add('betterarcheology:has_structure/fossil_chicken_birch', [
        'minecraft:birch_forest',
        'minecraft:old_growth_birch_forest',
        'regions_unexplored:silver_birch_forest'
    ])

    e.add('betterarcheology:has_structure/fossil_jungle_0', '#minecraft:is_jungle')
    e.add('betterarcheology:has_structure/fossil_jungle_1', '#minecraft:is_jungle')

    e.add('betterarcheology:has_structure/fossil_sheep_0', [
        'minecraft:old_growth_birch_forest',
        'minecraft:old_growth_pine_taiga',
        'minecraft:old_growth_spruce_taiga',
        'regions_unexplored:temperate_grove',
        'regions_unexplored:rocky_meadow',
    ])

    e.add('betterarcheology:has_structure/mesa_ruins', [
        'regions_unexplored:outback'
    ])

    e.removeAll('betterarcheology:has_structure/mott')
    e.add('betterarcheology:has_structure/mott',
        tagToArray(['minecraft:is_forest', 'minecraft:is_taiga', 'forge:is_plains'])
    )

    e.removeAll('betterarcheology:has_structure/stonehenge_grassy')
    e.add('betterarcheology:has_structure/stonehenge_grassy',
        tagToArray('forge:is_plains')
    )

    e.removeAll('betterarcheology:has_structure/temple_jungle')
    e.add('betterarcheology:has_structure/temple_jungle',
        tagToArray('minecraft:is_jungle')
    )

    e.removeAll('betterarcheology:has_structure/tumulus_grassy')
    e.add('betterarcheology:has_structure/tumulus_grassy',
        tagToArray(['minecraft:is_forest', 'minecraft:is_taiga', 'forge:is_plains'])
    )


    e.removeAll('fennecfox:has_fennecfox')
    e.add('fennecfox:has_fennecfox', [
        'minecraft:desert',
        'regions_unexplored:joshua_desert',
        'regions_unexplored:saguaro_desert',
    ])


})

// biome modifiers
ServerEvents.highPriorityData(e => {
    /**
     * Remove a forge biome modifier
     * @param {String} modifier - mod id + modifier name (ex: 'eidolon:silver_ore')
     */
    function removeBiomeModifier(modifier) {
        let namespace = modifier.split(':')[0]
        let filename = modifier.split(':')[1]
        e.addJson(`${namespace}:forge/biome_modifier/${filename}.json`, { type: 'forge:none' })
    }

    removeBiomeModifier('enlightened_end:irradium_ore_biome_modifier')
    removeBiomeModifier('eidolon:silver_ore')
    removeBiomeModifier('embers:add_lead_ore')
    removeBiomeModifier('embers:add_silver_ore')
})