import { StringSelectMenuInteraction } from "discord.js";


export async function select(interaction: StringSelectMenuInteraction, customId: string): Promise<boolean> {
  const match = customId == 'select';
  if (match) {
    const selected = interaction.values[0];
    interaction.reply(`You selected ${selected}!`)
  }
  return match;
}