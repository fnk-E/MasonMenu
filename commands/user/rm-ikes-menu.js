// Set Ikes Menu to Channel
const { SlashCommandBuilder } = require('discord.js');
const sqlRemove = require('../../external/SQL-remove.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('ikes-remove')
        .setDescription('Remove Current Channel to Print Ikes\' Menu'),
	async execute(interaction) {
		console.log(`Ike's Channel remove request for ${interaction.channel} (${interaction.channelId}) in ${interaction.guild} (${interaction.guildId})`);
		await sqlRemove(interaction.guildId, interaction.channelId, 0)
		.then( (data) => {
			console.log(data)
			if (data > 0) {
				interaction.reply('Ikes\' Channel Removed Properly!');
			}
			else if (data == 0) {
				interaction.reply('Ikes\' Channel Does not Exists!');
			}
			else {
				interaction.reply('An Error has Occurred');
			}
		});
	},
};