import {
    SlashCommandBuilder,
    ChannelType,
    CommandInteraction,
    TextChannel
} from 'discord.js';

module.exports = {
    // Create a new command here
    data: new SlashCommandBuilder()
        // Requires name and description
        .setName('tags')
        .setDescription('Adds or removes a tag to your intro')
        // Add options
        .addStringOption(option =>
            option.setName('add-remove')
                .setDescription('Choose add or remove')
                .setRequired(true)
                .addChoices(
                    {name: 'Add', value: 'add'},
                    {name: 'Remove', value: 'remove'},
                )
        )
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The tag input')
                .setRequired(true)
                .setMaxLength(2000)
        ),

    // Add execution function here
    async execute(interaction: CommandInteraction) {
        // Cast option values
        const addOrRemove = interaction.options.get('add-remove')?.value as string;
        const input = interaction.options.get('input')?.value as string;
        if (addOrRemove == "add"){
            //we add the input as a tag
            await interaction.reply("'" + input + "' is being added");
        }
        else if (addOrRemove == "remove"){
            //remove tag from input
            await interaction.reply("'" + input + "' is being removed");
        }
        else{
            //invalid option, you didn't write add or remove
            await interaction.reply("Please choose between add and remove for goodness sake");
        }
    },
};