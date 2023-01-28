import {
	Events,
	BaseInteraction
} from "discord.js";
import ExtendedClient from "types/ExtendedClient";

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction: BaseInteraction) {
		if (interaction.isChatInputCommand()) {
			const command = (interaction.client as ExtendedClient).commands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		} else if (interaction.isButton()) {
			interaction.reply('A button was clicked');
		} else {
			return;
		}
	},
};