// // priority: 50

// let flightChallengeItems = [
//     'minecraft:elytra',
//     'alexsmobs:tarantula_hawk_elytra',
//     'cataclysm:ignitium_elytra_chestplate',
//     'ad_astra:jet_suit'
// ]

// // Detect if a player has a flight item, then invite them to the challenge
// flightChallengeItems.forEach(flight_item => {
//     PlayerEvents.inventoryChanged(flight_item, e => {
//         const { player } = e
//         let pData = player.persistentData

//         if (!player.stages.has('flight_challenge_init')) { // TODO: add an elytra/end advancement here too
//             player.stages.add('flight_challenge_init')
//             pData.flight_timer = 1
//             pData.flight_tokens = 0
//             pData.flight_diamonds = 0
//             player.tell([
//                 Text.gold('\n---------------------------------------------------'),
//                 Text.gold('\nYou just obtained a flight item! You\'ve been formally invited to the 60-hour No Flight Challenge.'),
//                 Text.gray('\n- Gain rewards (Tokens and Diamonds) for not having a flight item equipped every three hours!'),
//                 Text.gray('\n- Complete the challenge at 60 hours, with several milestones along the way!'),
//                 Text.gray('\n- The longer you play without a flight item equipped, the more rewarding it gets!'),
//                 Text.red('\n- Equipping a flight item while in the challenge will reset your progress.'),
//                 Text.gray('\n- You can opt in and out of the challenge by running '), Text.of('/flight_challenge toggle.').hover(Text.gold('/flight_challenge toggle')).clickRunCommand('/flight_challenge toggle').color(0x5555FF).underlined(true),
//                 Text.gray('\n- For more information, do '), Text.of('/flight_challenge help.').hover(Text.gold('/flight_challenge help')).clickRunCommand('/flight_challenge help').color(0x5555FF).underlined(true),
//                 Text.gold('\n---------------------------------------------------'),
//             ])
//         }
//     })
// })


// // Challenge timing
// PlayerEvents.tick(e => {
//     const { player } = e
//     // timer that only runs once every 20 ticks (1 second interval)
//     if (!(player.age % 20 == 0)) return

//     let pData = player.persistentData
//     let curios = player.nbt.ForgeCaps['curios:inventory']
//     let hours = Math.floor(pData.flight_timer / 3600)
//     let remainingSecondsAfterHours = pData.flight_timer % 3600
//     let minutes = Math.floor(remainingSecondsAfterHours / 60)
//     let remainingSeconds = remainingSecondsAfterHours % 60

//     if (player.stages.has('flight_challenge')) {
//         // fail
//         if (flightChallengeItems.includes(player.chestArmorItem.id) || curios.toString().contains('minecraft:elytra') || curios.toString().contains('alexsmobs:tarantula_hawk_elytra')) {
//             player.tell(Text.red("You've failed the No Flight Challenge! Your progress has been reset and you must opt back in once you're truly ready.\n"))
//             player.tell([
//                 Text.red('You survived: \n'),
//                 Text.gold(hours), Text.gold(' hours, '),
//                 Text.gold(minutes), Text.gold(' minutes, and '),
//                 Text.gold(remainingSeconds), Text.gold(' seconds.'),
//                 Text.red('\nBetter luck next time!')
//             ])
//             pData.flight_timer = 1
//             player.stages.remove('flight_challenge')
//         } else {

//             // every 3 hours
//             if (pData.flight_timer % 10800 == 0) {
//                 let tokens = 6
//                 let diamonds = 1

//                 // after 12 hours
//                 if (pData.flight_timer >= 43200) tokens += 2
//                 // after 24 hours
//                 if (pData.flight_timer >= 86400) tokens += 2, ++diamonds
//                 // after 48 hours
//                 if (pData.flight_timer >= 172800) tokens += 2, ++diamonds

//                 player.tell([Text.gold('You\'ve recieved '), Text.green(`${tokens} Challenge Tokens`), Text.gold(' and '), Text.green(`${diamonds} Diamonds`), Text.gold(' from the No Flight gang.')])
//                 pData.flight_tokens += tokens
//                 pData.flight_diamonds += diamonds
//             }

//             ++pData.flight_timer
//         }

//         // 3600 seconds in an hour
//         if (pData.flight_timer == 43200) (
//             player.tell([
//                 Text.gold('\n---------------------------------------------------'),
//                 Text.lightPurple("\nYou've reached a No Flight Challenge milestone: 12 hours!"),
//                 Text.gray("\nYou'll gain an additional"),
//                 Text.green(" 2 Tokens"),
//                 Text.gray(" every"),
//                 Text.green(" three hours."),
//                 Text.gray("\n\nYour next milestone is at 24 hours."),
//                 Text.gold('\n---------------------------------------------------'),
//             ])
//         )
//         if (pData.flight_timer == 86400) (
//             player.tell([
//                 Text.gold('\n---------------------------------------------------'),
//                 Text.lightPurple("\nYou've reached a No Flight Challenge milestone: 24 hours!"),
//                 Text.gray("\nYou'll gain an additional"),
//                 Text.green(" 2 Tokens"),
//                 Text.gray(" and"),
//                 Text.green(" 1 Diamond"),
//                 Text.gray(" every"),
//                 Text.green(" 3 hours."),
//                 Text.gray("\n\nYour next milestone is at 48 hours."),
//                 Text.gold('\n---------------------------------------------------'),
//             ])
//         )
//         if (pData.flight_timer == 172800) (
//             player.tell([
//                 Text.gold('\n---------------------------------------------------'),
//                 Text.lightPurple("\nYou've reached a No Flight Challenge milestone: 48 hours!"),
//                 Text.gray("\nYou'll gain an additional"),
//                 Text.green(" 2 Tokens"),
//                 Text.gray(" and"),
//                 Text.green(" 1 Diamond"),
//                 Text.gray(" every"),
//                 Text.green(" 3 hours."),
//                 Text.gray("\n\nThe challenge is completed at 60 hours! You're 12 hours away!"),
//                 Text.gold('\n---------------------------------------------------'),
//             ])
//         )

//         if (pData.flight_timer >= 216000) {
//             player.runCommandSilent('playsound minecraft:ui.toast.challenge_complete player @a ~ ~ ~ 0.5')
//             player.runCommandSilent(`/tellraw @a ["",{"text":"${player.name.string}","color":"gold"},{"text":" has completed the 60-hour No Flight Challenge!","color":"light_purple"}]`)
//             player.tell(Text.lightPurple('\nCongratulations! Your reward has been added to your inventory. Don\'t forget to redeem your new and remaining Tokens and Diamonds as well!'))

//             pData.flight_tokens += 12
//             pData.flight_diamonds += 3
//             player.give(Item.of('minecraft:iron_block', 8))
//             player.give('minecraft:netherite_block')
//             player.give(Item.of('minecraft:netherite_upgrade_smithing_template', 9))

//             player.stages.remove('flight_challenge')
//             player.stages.add('flight_challenge_completed')
//             pData.flight_timer = 1
//         }

//         // debug
//         // player.tell(pData.flight_timer)
//     }
// })


// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------

// // COMMANDS

// ServerEvents.commandRegistry(event => {
//     const { commands: Commands, arguments: Arguments } = event

//     // full reload; use this instead of /reload

//     event.register(Commands.literal('flight_challenge')
//         .then(Commands.literal('toggle').executes(ctx => toggle(ctx)))
//         .then(Commands.literal('stats').executes(ctx => stats(ctx)))
//         .then(Commands.literal('redeem').executes(ctx => redeem(ctx)))
//         .then(Commands.literal('help').executes(ctx => help(ctx)))
//         .then(Commands.literal('list').executes(ctx => list(ctx)))
//         .then(Commands.literal('set').requires(src => src.hasPermission(2))
//             .then(Commands.literal('seconds')
//                 .then(Commands.argument('number', Arguments.INTEGER.create(event))
//                     .executes(ctx => {
//                         let player = ctx.source.player
//                         let pData = player.persistentData
//                         const seconds = Arguments.STRING.getResult(ctx, 'number')
//                         pData.flight_timer = seconds
//                         return 1
//                     })
//                 )
//             )
//             .then(Commands.literal('tokens')
//                 .then(Commands.argument('number', Arguments.INTEGER.create(event))
//                     .executes(ctx => {
//                         let player = ctx.source.player
//                         let pData = player.persistentData
//                         const tokens = Arguments.STRING.getResult(ctx, 'number')
//                         pData.flight_tokens = tokens
//                         return 1
//                     })
//                 )
//             )
//             .then(Commands.literal('diamonds')
//                 .then(Commands.argument('number', Arguments.INTEGER.create(event))
//                     .executes(ctx => {
//                         const diamonds = Arguments.STRING.getResult(ctx, 'number')
//                         let player = ctx.source.player
//                         let pData = player.persistentData
//                         pData.flight_diamonds = diamonds
//                         return 1
//                     })
//                 )
//             )
//         )
//     )
// })

// /**
//  * jsdoc for typings to work properly
//  * @param {Internal.CommandContext_<Internal.CommandSourceStack>} ctx
//  */
// let toggle = ctx => {
//     let player = ctx.source.player
//     let pData = player.persistentData

//     player.tell(Text.gold('\n---------------------------------------------------'))

//     // add or remove kubejs stage "flight_challenge" as a toggle
//     if (player.stages.has('flight_challenge')) {
//         player.stages.remove('flight_challenge')

//         let hours = Math.floor(pData.flight_timer / 3600)
//         let remainingSecondsAfterHours = pData.flight_timer % 3600
//         let minutes = Math.floor(remainingSecondsAfterHours / 60)
//         let remainingSeconds = remainingSecondsAfterHours % 60

//         player.tell([
//             Text.red('You survived:'),
//             Text.gold(`\n${hours} hours, ${minutes} minutes, and ${remainingSeconds} seconds.`),
//             Text.red('\nBetter luck next time!'),
//         ])

//         pData.flight_timer = 1

//     } else if (player.stages.has('flight_challenge_completed')) {

//         player.tell(Text.red('You\'ve already completed the challenge!'))

//     } else { // does not have flight_challenge or flight_challenge_completed

//         if (player.stages.has('flight_challenge_init')) {
//             player.stages.add('flight_challenge')

//             player.tell([
//                 Text.lightPurple("You're now opted into the 60-hour No Flight challenge."),
//                 Text.gray('\n- You can opt out of the challenge by re-executing '), Text.of('/flight_challenge toggle.').hover(Text.gold('/flight_challenge toggle')).clickRunCommand('/flight_challenge toggle').color(0x5555FF).underlined(true),
//                 Text.gray('\n     - Opting out, or failing the challege, '), Text.red('will reset your time progress.').underlined(true), Text.gray(' Your rewards will remain.'),
//                 Text.gray('\n- You can check your progress by doing '), Text.of('/flight_challenge stats.').hover(Text.gold('/flight_challenge stats')).clickRunCommand('/flight_challenge stats').color(0x5555FF).underlined(true),
//                 Text.gray('\n- You can redeen your rewards by doing '), Text.of('/flight_challenge redeem.').hover(Text.gold('/flight_challenge redeem')).clickRunCommand('/flight_challenge redeem').color(0x5555FF).underlined(true),
//                 Text.gray('\n- For more information, do '), Text.of('/flight_challenge help.').hover(Text.gold('/flight_challenge help')).clickRunCommand('/flight_challenge help').color(0x5555FF).underlined(true),
//             ])

//         } else {
//             player.tell(Text.red('You must first obtain an Elytra/Flight item.'))
//         }
//     }

//     player.tell(Text.gold('---------------------------------------------------'))

//     return 1
// }

// /**
//  * jsdoc for typings to work properly
//  * @param {Internal.CommandContext_<Internal.CommandSourceStack>} ctx
//  */
// let stats = ctx => {
//     let player = ctx.source.player
//     let pData = player.persistentData
//     let hours = Math.floor(pData.flight_timer / 3600)
//     let remainingSecondsAfterHours = pData.flight_timer % 3600
//     let minutes = Math.floor(remainingSecondsAfterHours / 60)
//     let remainingSeconds = remainingSecondsAfterHours % 60

//     player.tell(Text.gold('\n---------------------------------------------------'))

//     if (player.stages.has('flight_challenge')) {
//         player.tell([Text.gray('You\'ve survived: '), Text.gold(`${hours} hours, ${minutes} minutes, and ${remainingSeconds} seconds so far!`)])

//         // 48 hours
//         if (pData.flight_timer > 172800) player.tell(Text.gray(`You've reached the 48 hour milestone and recieve a total of 12 Tokens and 3 Diamonds per 3 hours.\nYou complete the challenge in ${59 - hours} hours and ${59 - minutes} minutes!!!`))
//         // 24 hours
//         else if (pData.flight_timer > 86400) player.tell(Text.gray(`You've reached the 24 hour milestone and recieve a total of 10 Tokens and 2 Diamonds per 3 hours.\nThe final milestone is in ${47 - hours} hours and ${59 - minutes} minutes.`))
//         // 12 hours
//         else if (pData.flight_timer > 43200) player.tell(Text.gray(`You've reached the 12 hour milestone and recieve a total of 8 Tokens and 1 Diamond per 3 hours.\nThe next milestone is in ${23 - hours} hours and ${59 - minutes} minutes.`))
//         else player.tell(Text.gray(`You recieve a total of 6 Token and 1 Diamond per 3 hours.\nThe next milestone is in ${11 - hours} hours and ${59 - minutes} minutes.`))
//     } else player.tell(Text.red("You're not opted into the No Flight challenge or have already completed it."))
//     player.tell([
//         Text.gray('\nYou have '), Text.green(`${pData.flight_tokens} Challenge Tokens`), Text.gray(' and '), Text.green(`${pData.flight_diamonds} Diamonds`), Text.gray(' ready.'),
//         Text.gray('\nRedeem with '), Text.of('/flight_challenge redeem.').clickRunCommand('/flight_challenge redeem').hover(Text.gold('/flight_challenge redeem')).color(0x5555FF).underlined(true),
//     ])

//     player.tell(Text.gold('---------------------------------------------------'))

//     return 1
// }

// /**
//  * jsdoc for typings to work properly
//  * @param {Internal.CommandContext_<Internal.CommandSourceStack>} ctx
//  */
// let redeem = ctx => {
//     let player = ctx.source.player
//     let pData = player.persistentData

//     player.tell(Text.gold('\n---------------------------------------------------'))

//     if (pData.flight_tokens > 0 || pData.flight_diamonds > 0) {
//         player.tell([Text.gray('\nYou\'ve redeemed '), Text.green(`${pData.flight_tokens} Challenge Tokens`), Text.gray(', and '), Text.green(`${pData.flight_diamonds} Diamonds.`)])
//         player.give(Item.of('kubejs:no_flight_challenge_token', pData.flight_tokens))
//         player.give(Item.of('minecraft:diamond', pData.flight_diamonds))
//         pData.flight_tokens = 0
//         pData.flight_diamonds = 0
//     } else {
//         player.tell(Text.red("You're broke!"))
//         player.runCommandSilent('playsound rats:entity.rats.rat.poop player @s ~ ~ ~ 1 0.05')
//     }

//     player.tell(Text.gold('---------------------------------------------------'))

//     return 1
// }


// /**
//  * jsdoc for typings to work properly
//  * @param {Internal.CommandContext_<Internal.CommandSourceStack>} ctx
//  */
// let help = ctx => {
//     let player = ctx.source.player

//     player.tell([
//         Text.gold('\n---------------------------------------------------'),
//         Text.gray('\nYou gain'), Text.green(' 1 Diamond'), Text.gray(' and'), Text.green(' 6 Challenge Tokens'), Text.gray(' every three hours.').underlined(true), Text.gray(' Milestones will increase the amount of rewards you get:'),
//         Text.yellow('\n- 12 hours: An additional 2 Tokens'),
//         Text.aqua('\n- 24 hours: An additional 2 Tokens and a Diamond'),
//         Text.green('\n- 48 hours: An additional 2 Tokens and a Diamond'),
//         Text.lightPurple('\n- 60 hours: Challenge completed! A symphony of reward will enter you inventory!\n'),
//         Text.of('\n/flight_challenge toggle').clickRunCommand('/flight_challenge toggle').hover(Text.gold('/flight_challenge toggle')).color(0x5555FF).underlined(true), Text.gray(' - Opt in or out of the No Flight challenge'),
//         Text.gray('\n     - Opting out, or failing the challenge, '), Text.red('will reset your time progress,').underlined(true), Text.gray(' but your rewards will remain.'),
//         Text.of('\n/flight_challenge stats').clickRunCommand('/flight_challenge stats').hover(Text.gold('/flight_challenge stats')).color(0x5555FF).underlined(true), Text.gray(' - View your progress and rewards in the challenge'),
//         Text.of('\n/flight_challenge redeem').clickRunCommand('/flight_challenge redeem').hover(Text.gold('/flight_challenge redeem')).color(0x5555FF).underlined(true), Text.gray(' - Redeem 1 Token and 1 Diamond per reward'),
//         Text.of('\n/flight_challenge list').clickRunCommand('/flight_challenge list').hover(Text.gold('/flight_challenge list')).color(0x5555FF).underlined(true), Text.gray(' - Get the list of items that will fail the challenge if they\'re equipped'),
//         Text.gold('\n---------------------------------------------------'),
//     ])

//     return 1
// }

// /**
//  * jsdoc for typings to work properly
//  * @param {Internal.CommandContext_<Internal.CommandSourceStack>} ctx
//  */
// let list = ctx => {
//     let player = ctx.source.player

//     let msg = [
//         Text.gold('\n---------------------------------------------------'),
//         Text.gray('\nThe following equipment will disqualify you from the challenge on-equip:'),
//     ]
//     flightChallengeItems.forEach(item => msg.push(Text.yellow(`\n${global.ingerland(item)}`)))
//     msg.push(Text.gold('\n---------------------------------------------------'))
//     player.tell(msg)

//     return 1
// }
