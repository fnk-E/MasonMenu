// Force the Channel to Print Menu
const { SlashCommandBuilder } = require('discord.js');
const build = require('../../external/message-builder.js')
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



module.exports = {
    data: new SlashCommandBuilder()
        .setName('print')
        .setDescription('Force Print Menu Associated with Channel'),
    async execute(interaction) {
        build.build().then( menus => {
            console.log(menus)
            Tags.findAll().then( enteries => {
                enteries.map( entry => {
                    const channel = interaction.client.channels.cache.get();
                    channel.send({ embeds: [menus[entry.type]] });
                })
            });
        });
    }
}