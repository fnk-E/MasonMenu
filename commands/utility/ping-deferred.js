const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dfping')
        .setDescription('Pong Deferred!'),
    async execute(interaction) {
        // await interaction.deferReply({ ephemeral: true });
		await interaction.deferReply();
		await wait(4_000);
		await interaction.editReply('Pong!');
    }
}