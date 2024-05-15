const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dping')
        .setDescription('Pong then delete!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        await interaction.deleteReply();
    }
}