// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlRemove = require('../../external/SQL-remove.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('southside-remove')
        .setDescription('Remove Current Channel to Print Southside\'s Menu'),
	async execute(interaction) {
		console.log(`Southside's Channel remove request for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlRemove(interaction.guildId, interaction.channelId, 1)
		.then( (data) => {
			console.log(typeof(data))
			if (data > 0) {
				interaction.reply('Southside\'s Channel Removed Properly!');
			}
			else if (data == 0) {
				interaction.reply('Southside\'s Channel Does not Exists!');
			}
			else {
				interaction.reply('An Error has Occurred');
			}
		});
	},
};