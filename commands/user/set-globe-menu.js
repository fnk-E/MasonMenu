// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlAdd = require('../../external/SQL-add.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('globe')
        .setDescription('Set Current Channel to Print Globe\'s Menu'),
	async execute(interaction) {
		console.log(`Globe's Channel set for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlAdd(interaction.guildId, interaction.channelId, 3)
		.then( (data) => {
			if (!data) {
				interaction.reply('The Globe\'s Channel Set Properly!');
			}
			else if (data == 1) {
				interaction.reply('The Globe\'s Channel Already Exists!');
			}
			else {
				interaction.followUp('An Error has Occurred');
			}
		});
	},
};