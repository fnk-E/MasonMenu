const { SlashCommandBuilder } = require('discord.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Tags = sequelize.define('tags', {
	guild_id: Sequelize.INTEGER,
	channel_id: Sequelize.INTEGER,
	type: Sequelize.INTEGER
});

Tags.sync();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('table')
        .setDescription('Display SQL Information [DEBUG]'),
    async execute(interaction) {
        const tagList = await Tags.findAll({ attributes: ['guild_id'] });
        console.log(tagList)
        const tagString = tagList.map(t => t.guild_id).join(', ') || 'No tags set.';

        return interaction.reply(`List of tags: ${tagString}`);
    }
}