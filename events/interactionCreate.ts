import {
	Events,
	BaseInteraction,
	ButtonInteraction
} from "discord.js";
import ExtendedClient from "types/ExtendedClient";

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction: BaseInteraction) {
		// CHAT INPUT COMMANDS
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
			// BUTTON COMMANDS
		} else if (interaction.isButton()) {
			const customId = (interaction as ButtonInteraction).customId;

			// Branch on button's customId
			if (customId == 'primary') {
				interaction.reply(`${interaction.user.username} clicked the button.`)
			} else {
				console.log(`[WARNING]: No button interaction handler exists for ${customId}`)
			}
		} else {
			return;
		}
	},
};