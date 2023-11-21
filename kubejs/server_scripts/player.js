// priority: 50

ItemEvents.rightClicked('minecraft:ender_eye', e => {
    e.cancel()
})


// inventory replacements
global.inventoryReplacement.forEach(replacement => {
    PlayerEvents.inventoryChanged(replacement.toReplace, e => {
        const { player } = e
        if (replacement.msg != false) {
            player.tell([
                Text.gray('An item in your inventory, '),
                Text.red(global.ingerland(replacement.toReplace)),
                Text.gray(' has been replaced with '),
                Text.green(global.ingerland(replacement.replaceWith)),
                Text.gray('!')
            ])
        }
        let slot = player.inventory.find(replacement.toReplace)
        let stack_size = player.inventory.getStackInSlot(slot).getCount()
        player.inventory.setStackInSlot(slot, Item.of(replacement.replaceWith, stack_size))
    })
})


// spooking people only in october
PlayerEvents.loggedIn(event => {
    const { player } = event
    let currentMonth = new Date().getMonth() + 1

    // if it's october, spook some people
    if (currentMonth == 10) {
        let smallSpook = Math.floor(Math.random() * 20) + 1

        if (smallSpook < 11) {
            let bigSpook = Math.floor(Math.random() * 100) + 1

            if (bigSpook == 1) player.runCommandSilent('playsound alexsmobs:april_fools_music_box ambient @s')
            if (bigSpook == 2) player.runCommandSilent('playsound alexsmobs:april_fools_scream ambient @s ~ ~ ~ 0.25')
            if (bigSpook == 3) player.runCommandSilent('playsound cave_dweller:chase_4 ambient @s')
            if (bigSpook == 4) player.runCommandSilent('playsound alexscaves:nuclear_siren ambient @s')
        }
        if (smallSpook == 11) player.runCommandSilent('playsound mutantmonsters:entity.mutant_enderman.scream ambient @s ~ ~ ~ 0.25')
        if (smallSpook == 12) player.runCommandSilent('playsound minecraft:entity.ender_dragon.death ambient @s ~ ~ ~ 0.5 0.01')
        if (smallSpook == 13) player.runCommandSilent('playsound minecraft:block.beacon.activate ambient @s ~ ~ ~ 1 0.01')
        if (smallSpook == 14) player.runCommandSilent('playsound cave_dweller:cavenoise_4 ambient @s ~ ~ ~ 1')
        if (smallSpook == 15) player.runCommandSilent('playsound alexsmobs:april_fools_power_outage ambient @s ~ ~ ~ 1')
        if (smallSpook == 16) player.runCommandSilent('playsound minecraft:entity.warden.roar ambient @s ~ ~ ~ 1 0.01')
        if (smallSpook == 17) player.runCommandSilent('playsound minecraft:ambient.cave ambient @s ~ ~ ~ 1')
        if (smallSpook == 18) player.runCommandSilent('playsound minecraft:entity.enderman.stare ambient @s')
        if (smallSpook == 19) player.runCommandSilent('playsound alexsmobs:void_worm_idle ambient @s')
    }
})


// Auto chunky
ServerEvents.loaded(event => {
    let nbOnlinePlayers = event.getServer().getPlayers().length;

    if (nbOnlinePlayers <= 0) {
        event.server.runCommandSilent('chunky continue')
    }
})

// On player login, pause chunky
PlayerEvents.loggedIn(event => {
    event.server.runCommandSilent('chunky pause')
})

// On player disconnect, start chunky, if there are no more players
PlayerEvents.loggedOut(event => {
    let nbOnlinePlayers = event.getServer().getPlayers().length;

    // Note: When a player disconnects, he still counts as online for a few moments
    if (nbOnlinePlayers <= 1) {
        event.server.runCommandSilent('chunky continue')
    }
})


// https://github.com/FTBTeam/FTB-Essentials/dev/common/src/main/java/dev/ftb/mods/ftbessentials/util/FTBEPlayerData.java
if (Platform.isLoaded('ftbessentials')) {
    const $FBTEssentials = Java.loadClass('dev.ftb.mods.ftbessentials.util.FTBEPlayerData')

    EntityEvents.death(event => {
        const entity = event.entity
        if (!entity.isPlayer()) return
        let FTBPlayerData = $FBTEssentials.getOrCreate(entity.getProfile()).get()
        // delay because death teleports take a bit to save
        event.server.scheduleInTicks(40, () => {
            // remove death teleport pos from teleportHistory 
            FTBPlayerData.popTeleportHistory()
        })
    })
}