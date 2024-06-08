// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlRemove = require('../../external/SQL-remove.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('globe-remove')
        .setDescription('Set Current Channel to Print Globe\'s Menu'),
	async execute(interaction) {
		console.log(`Globe's Channel remove request for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlRemove(interaction.guildId, interaction.channelId, 3)
		.then( (data) => {
			console.log(typeof(data))
			if (data > 0) {
				interaction.reply('The Globe\'s Channel Removed Properly!');
			}
			else if (data == 0) {
				interaction.reply('The Globe\'s Channel Does not Exists!');
			}
			else {
				interaction.reply('An Error has Occurred');
			}
		});
	},
};