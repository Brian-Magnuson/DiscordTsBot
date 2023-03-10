/*
Part of the following source code was retrieved from discordjs/guide.
discordjs/guide is licensed under the MIT License
Copyright (c) 2017 - 2022 Sanctuary
*/

import {
	Client,
	Events
} from 'discord.js'

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client: Client) {
		console.log(`Ready! Logged in as ${client.user!.tag}`);
	},
};