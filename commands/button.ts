import {
  SlashCommandBuilder,
  CommandInteraction,
  TextChannel,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from 'discord.js';

module.exports = {
  // Create a new command here
  data: new SlashCommandBuilder()
    // Requires name and description
    .setName('button')
    .setDescription('Creates a button you can click!'),

  // Add execution function here
  async execute(interaction: CommandInteraction) {

    const row = new ActionRowBuilder<ButtonBuilder>()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('primary')
          .setLabel('Click me!')
          .setStyle(ButtonStyle.Primary),
      );


    await interaction.reply({
      content: "I want you to ",
      components: [row]
    })
  },
};