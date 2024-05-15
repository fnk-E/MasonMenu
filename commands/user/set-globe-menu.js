// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('globe')
        .setDescription('Set Current Channel to Print Globe\'s Menu'),
	async execute(interaction) {
		// Set SQL Logic

		await interaction.reply('Globe\'s Channel set Properly!');
	},
};