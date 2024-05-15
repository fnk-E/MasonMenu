// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('frontroyal')
        .setDescription('Set Current Channel to Print Front Royal\'s Menu'),
	async execute(interaction) {
		// Set SQL Logic

		await interaction.reply('Front Royal\'s Channel set Properly!');
	},
};