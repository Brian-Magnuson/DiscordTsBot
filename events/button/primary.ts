import { ButtonInteraction } from "discord.js";

export async function primary(interaction: ButtonInteraction, customId: string): Promise<boolean> {
  const match = customId == 'primary';
  if (match) {
    interaction.reply(`${interaction.user.username} clicked the button.`);
  }
  return match;
}