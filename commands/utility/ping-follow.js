const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fping')
        .setDescription('Pong with a follow up!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        // await interaction.followUp({ content: 'Pong again!', ephemeral: true });
		await interaction.followUp('Pong again!');
    }
}