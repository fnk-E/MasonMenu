const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('table')
        .setDescription('Display SQL Information [DEBUG]'),
    async execute(interaction) {
        await interaction.reply('Print SQL Table')
    }
}