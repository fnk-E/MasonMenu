// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('ikes')
        .setDescription('Set Current Channel to Print Ikes\' Menu'),
	async execute(interaction) {
		// Set SQL Logic

		await interaction.reply('Ikes\' Channel set Properly!');
	},
};