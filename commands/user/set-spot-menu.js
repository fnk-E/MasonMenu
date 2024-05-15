const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('spot')
        .setDescription('Set Current Channel to Print The Spot\'s Menu'),
	async execute(interaction) {
		// Set SQL Logic

		await interaction.reply('The Spot\'s Channel set Properly!');
	},
};