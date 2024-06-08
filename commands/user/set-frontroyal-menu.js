// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlAdd = require('../../external/SQL-add.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('frontroyal')
        .setDescription('Set Current Channel to Print Front Royal\'s Menu'),
	async execute(interaction) {
		console.log(`Front Royal's Channel set for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlAdd(interaction.guildId, interaction.channelId, 2)
		.then( (data) => {
			if (!data) {
				interaction.reply('Front Royal\'s Channel Set Properly!');
			}
			else if (data == 1) {
				interaction.reply('Front Royal\'s Channel Already Exists!');
			}
			else {
				interaction.followUp('An Error has Occurred');
			}
		});
	},
};