// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlRemove = require('../../external/SQL-remove.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('frontroyal-remove')
        .setDescription('Remove Current Channel to Print Front Royal\'s Menu'),
	async execute(interaction) {
		console.log(`Front Royal's Channel remove request for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlRemove(interaction.guildId, interaction.channelId, 2)
		.then( (data) => {
			console.log(typeof(data))
			if (data > 0) {
				interaction.reply('Front Royale\'s Channel Removed Properly!');
			}
			else if (data == 0) {
				interaction.reply('Front Royale\'s Channel Does not Exists!');
			}
			else {
				interaction.reply('An Error has Occurred');
			}
		});
	},
};