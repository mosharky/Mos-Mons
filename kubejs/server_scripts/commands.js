// priority: 49

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    // /fr
    event.register(
        Commands.literal('fr')
            .requires(src => src.hasPermission(3))
            .executes(ctx => {
                let server = ctx.source.getServer()
                server.runCommandSilent('kubejs reload startup_scripts')
                server.runCommandSilent('kubejs reload server_scripts')
                server.runCommandSilent('kubejs reload client_scripts')
                // server.runCommandSilent('kubejs reload lang')
                // server.runCommandSilent('kubejs reload textures')
                server.runCommand('reload')
                return 1
            })
    )
})