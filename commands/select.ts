import {
  SlashCommandBuilder,
  ChannelType,
  CommandInteraction,
  TextChannel,
  ActionRowBuilder,
  StringSelectMenuBuilder
} from 'discord.js';

module.exports = {
  // Create a new command here
  data: new SlashCommandBuilder()
    // Requires name and description
    .setName('select')
    .setDescription('Replies with a select menu'),

  // Add execution function here
  async execute(interaction: CommandInteraction) {

    const row = new ActionRowBuilder<StringSelectMenuBuilder>()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('select')
          .setPlaceholder('Nothing selected')
          .addOptions(
            {
              label: 'C++',
              value: 'C++'
            },
            {
              label: 'Java',
              value: 'Java'
            },
            {
              label: 'Python',
              value: 'Python'
            }
          )
      );

    await interaction.reply({
      content: "Which language do you like best?",
      components: [row]
    })

  },
};