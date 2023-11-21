// priority: 1500
// this file builds up a list of every id related to every type of wood 
/*
ALLOWED ENTRIES:
type: modId:woodType
*/

const woodTypesToConstruct = [
    { type: 'minecraft:birch' },
    { type: 'minecraft:oak' },
    { type: 'minecraft:dark_oak', },
    { type: 'minecraft:jungle' },
    { type: 'minecraft:spruce' },
    { type: 'minecraft:warped' },
    { type: 'minecraft:crimson' },
    { type: 'minecraft:mangrove' },
    // rats
    { type: 'rats:pirat' },
    // ad_astra
    // { type: 'ad_astra:aeronos' },
    // { type: 'ad_astra:strophar' },
    // { type: 'ad_astra:glacian' },
    // eidolon
    { type: 'eidolon:illwood' },
    // aether
    { type: 'aether:skyroot' },
    // aether_redux
    { type: 'aether_redux:blightwillow' },
    { type: 'aether_redux:cloudcap' },
    { type: 'aether_redux:springshroom' }, // undefined stripped
    { type: 'aether_redux:crystal' },
    { type: 'aether_redux:glacia' },
    { type: 'aether_redux:fieldsprout' },
    // twilightforest
    { type: 'twilightforest:twilight_oak' },
    { type: 'twilightforest:canopy' },
    { type: 'twilightforest:mangrove' },
    { type: 'twilightforest:dark' },
    { type: 'twilightforest:time' },
    { type: 'twilightforest:transformation' },
    { type: 'twilightforest:mining' },
    { type: 'twilightforest:sorting' },
    // regions_unexplored
    { type: 'regions_unexplored:alpha' }, // undefined wood, stripped
    { type: 'regions_unexplored:baobab' },
    { type: 'regions_unexplored:blackwood' },
    { type: 'regions_unexplored:blue_bioshroom' },
    { type: 'regions_unexplored:brimwood' },
    { type: 'regions_unexplored:cobalt' },
    { type: 'regions_unexplored:cypress' },
    { type: 'regions_unexplored:dead' },
    { type: 'regions_unexplored:eucalyptus' },
    { type: 'regions_unexplored:green_bioshroom' },
    { type: 'regions_unexplored:joshua' },
    { type: 'regions_unexplored:kapok' },
    { type: 'regions_unexplored:larch' },
    { type: 'regions_unexplored:magnolia' },
    { type: 'regions_unexplored:maple' },
    { type: 'regions_unexplored:mauve' },
    { type: 'regions_unexplored:palm' },
    { type: 'regions_unexplored:pine' },
    { type: 'regions_unexplored:pink_bioshroom' },
    { type: 'regions_unexplored:redwood' },
    { type: 'regions_unexplored:socotra' },
    { type: 'regions_unexplored:willow' },
    { type: 'regions_unexplored:yellow_bioshroom' },
    // ancient_aether
    { type: 'ancient_aether:highsproot' },
    { type: 'ancient_aether:sakura' },
    // betterarcheology
    { type: 'betterarcheology:rotten' }, // undefined wood, stripped
    // betterend
    { type: 'betterend:mossy_glowshroom' },
    { type: 'betterend:pythadendron' },
    { type: 'betterend:end_lotus' },
    { type: 'betterend:lacugrove' },
    { type: 'betterend:dragon_tree' },
    { type: 'betterend:tenanea' },
    { type: 'betterend:helix_tree' },
    { type: 'betterend:umbrella_tree' },
    { type: 'betterend:jellyshroom' },
    { type: 'betterend:lucernia' },
    // snifferplus
    { type: 'snifferplus:stone_pine' },
    // deep_aether
    { type: 'deep_aether:roseroot' },
    { type: 'deep_aether:cruderoot' },
    { type: 'deep_aether:conberry' },
    { type: 'deep_aether:sunroot' },
    // alexscaves
    { type: 'alexscaves:pewen' },
    { type: 'alexscaves:thornwood' },
]

let constructedWoodTypes = []

woodTypesToConstruct.forEach(entry => {
    let splitVariant = entry.type.split(':')
    let modId = splitVariant[0]
    let woodType = splitVariant[1]
    let logSuffix, woodSuffix, logBlock, woodBlock, logBlockStripped,
        woodBlockStripped, plankBlock

    // suffix exceptions
    switch (woodType) {
        case 'warped':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'crimson':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'cloudcap':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'springshroom':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'indigo':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'green_bioshroom':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'pink_bioshroom':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'blue_bioshroom':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'yellow_bioshroom':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'illwood':
            logSuffix = '_log'
            woodSuffix = '_bark'
            break
        default:
            logSuffix = '_log'
            woodSuffix = '_wood'
    }

    if (modId == 'betterend') woodSuffix = '_bark'

    logBlock = modId + ':' + woodType + logSuffix
    woodBlock = modId + ':' + woodType + woodSuffix
    logBlockStripped = modId + ':stripped_' + woodType + logSuffix
    woodBlockStripped = modId + ':stripped_' + woodType + woodSuffix
    plankBlock = modId + ':' + woodType + '_planks'

    if (modId == 'betterend') {
        woodBlock = modId + ':' + woodType + woodSuffix
        logBlockStripped = modId + ':' + woodType + '_stripped' + logSuffix
        woodBlockStripped = modId + ':' + woodType + '_stripped' + woodSuffix
    }

    // type exceptions


    


    // 🔒 FINALIZATION 🔒

    let woodTypeData = {
        // type: entry.type,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock
    }

    Object.keys(woodTypeData).forEach(key => {
        let item = woodTypeData[key]
        if (!Item.exists(item)) {
            woodTypeData[key] = undefined
            // console.log(`DOESN'T EXIST: ${item}`)  // debug
        }
    })

    constructedWoodTypes.push(woodTypeData)
})
