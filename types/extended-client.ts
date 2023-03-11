import {
  Client,
  ClientOptions,
  Collection,
  CommandInteraction
} from 'discord.js';
import Command from './command';

export default class ExtendedClient extends Client<true> {

  commands: Collection<string, Command> = new Collection();

  constructor(clientOptions: ClientOptions) {
    super(clientOptions);
  }
}
