// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlAdd = require('../../external/SQL-add.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('spot')
        .setDescription('Set Current Channel to Print The Spot\'s Menu'),
	async execute(interaction) {
		console.log(`Spot Channel set for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlAdd(interaction.guildId, interaction.channelId, 4)
		.then( (data) => {
			if (!data) {
				interaction.reply('The Spot\'s Channel Set Properly!');
			}
			else if (data == 1) {
				interaction.reply('The Spot\'s Channel Already Exists!');
			}
			else {
				interaction.followUp('An Error has Occurred');
			}
		});
	},
};