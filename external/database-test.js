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

Tags.findAll().then( (enteries) => {
    enteries.map( t => {
        console.log(t.channel_id);
        console.log(t.type); 
    })
});

