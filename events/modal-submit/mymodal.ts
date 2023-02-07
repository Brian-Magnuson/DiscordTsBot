import { ModalSubmitInteraction } from "discord.js";



export async function select(interaction: ModalSubmitInteraction, customId: string): Promise<boolean> {
  const match = customId == 'select';
  if (match) {
    const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
    const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
    interaction.reply({
      content: `You entered: ${favoriteColor}\n and ${hobbies}`,
      ephemeral: true
    })
  }
  return match;
}