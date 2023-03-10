import {
	Events,
	BaseInteraction,
	ButtonInteraction,
	ModalSubmitInteraction,
	StringSelectMenuInteraction
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

			// STRING SELECT MENU COMMANDS
		} else if (interaction.isStringSelectMenu()) {
			const customId = (interaction as StringSelectMenuInteraction).customId;

			// Branch on menu's customId
			if (customId == 'select') {
				const selected = interaction.values[0];
				await interaction.reply(`You selected ${selected}!`)
			} else {
				console.log(`[WARNING]: No string select menu interaction handler exists for ${customId}`)
			}

			// MODAL SUBMIT COMMANDS
		} else if (interaction.isModalSubmit()) {
			const customId = (interaction as ModalSubmitInteraction).customId;

			// Branch on modal's customId
			if (customId == 'mymodal') {
				const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
				const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
				interaction.reply({
					content: `You entered: ${favoriteColor}\n and ${hobbies}`,
					ephemeral: true
				})
			} else {
				console.log(`[WARNING]: No modal submit interaction handler exists for ${customId}`)
			}

			// No interaction matches
		} else {
			return;
		}
	},
};