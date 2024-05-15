const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eping')
        .setDescription('Pong then Edit!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        await wait(2_000);
		await interaction.editReply('Pong again!');
    }
}