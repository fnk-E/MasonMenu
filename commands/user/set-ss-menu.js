// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('southside')
        .setDescription('Set Current Channel to Print Southside\'s Menu'),
	async execute(interaction) {
		// Set SQL Logic

		await interaction.reply('Southside\'s Channel set Properly!');
	},
};