
import {
  Awaitable,
  CommandInteraction,
  SlashCommandBuilder
} from 'discord.js'

export default interface Command {
  data: SlashCommandBuilder,
  execute: (interaction: CommandInteraction) => Awaitable<void>
}