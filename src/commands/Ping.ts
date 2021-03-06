import {BaseCommandInteraction, Client} from "discord.js";
import {Command} from '../command';

export const Ping: Command = {
    name: "ping",
    description: "Displays how long the bot takes to respond.",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Pong //soonToBeTimestamped";
        await interaction.followUp({
            content
        })
    }
}