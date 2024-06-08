// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlRemove = require('../../external/SQL-remove.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('spot-remove')
        .setDescription('Remove Current Channel to Print The Spot\'s Menu'),
	async execute(interaction) {
		console.log(`Spot Channel remove request for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlRemove(interaction.guildId, interaction.channelId, 4)
		.then( (data) => {
			console.log(typeof(data))
			if (data > 0) {
				interaction.reply('The Spot\'s Channel Removed Properly!');
			}
			else if (data == 0) {
				interaction.reply('The Spot\'s Channel Does not Exists!');
			}
			else {
				interaction.reply('An Error has Occurred');
			}
		});
	},
};