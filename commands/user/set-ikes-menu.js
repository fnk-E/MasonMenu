// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlAdd = require('../../external/SQL-add.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('ikes')
        .setDescription('Set Current Channel to Print Ikes\' Menu'),
	async execute(interaction) {
		console.log(`Ike's Channel set for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`)
		await sqlAdd(interaction.guildId, interaction.channelId, 0)
		.then( (data) => {
			if (!data) {
				interaction.reply('Ikes\' Channel Set Properly!');
			}
			else if (data == 1) {
				interaction.reply('Ikes\' Channel Already Exists!');
			}
			else {
				interaction.followUp('An Error has Occurred');
			}
		});
	},
};