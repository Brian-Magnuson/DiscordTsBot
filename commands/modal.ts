import {
  SlashCommandBuilder,
  CommandInteraction,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
  ModalActionRowComponentBuilder,
} from 'discord.js';

module.exports = {
  // Create a new command here
  data: new SlashCommandBuilder()
    // Requires name and description
    .setName('modal')
    .setDescription('Creates and displays a modal!'),

  // Add execution function here
  async execute(interaction: CommandInteraction) {

    const modal = new ModalBuilder()
      .setCustomId('mymodal')
      .setTitle('My Modal');

    const favoriteColorInput = new TextInputBuilder()
      .setCustomId('favoriteColorInput')
      .setLabel("What's your favorite color?")
      .setStyle(TextInputStyle.Short)

    const hobbiesInput = new TextInputBuilder()
      .setCustomId('hobbiesInput')
      .setLabel("What's some of your favorite hobbies?")
      .setStyle(TextInputStyle.Paragraph);

    const firstActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>()
      .addComponents(favoriteColorInput);
    const secondActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>()
      .addComponents(hobbiesInput);

    modal.addComponents(firstActionRow, secondActionRow);


    await interaction.showModal(modal);
  },
};