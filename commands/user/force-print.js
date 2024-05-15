// Force the Channel to Print Menu
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('print')
        .setDescription('Force Print Menu Associated with Channel'),
    async execute(interaction) {
        // Find Channel then Call Print Module
        await interaction.reply('ping')
    }
}