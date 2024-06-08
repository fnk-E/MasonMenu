// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlAdd = require('../../external/SQL-add.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('southside')
        .setDescription('Set Current Channel to Print Southside\'s Menu'),
	async execute(interaction) {
		console.log(`Southside's Channel set for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlAdd(interaction.guildId, interaction.channelId, 1)
		.then( (data) => {
			if (!data) {
				interaction.reply('Southside\'s Channel Set Properly!');
			}
			else if (data == 1) {
				interaction.reply('Southside\'s Channel Already Exists!');
			}
			else {
				interaction.followUp('An Error has Occurred');
			}
		});
	},
};