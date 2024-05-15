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

// Before or After?

module.exports = (guild_id, channel_id, type) => {
    const promise = new Promise( (data) => {
        try {
            Tags.findOne({ where: { guild_id: guild_id,
                                    channel_id: channel_id,
                                    type: type }})
            .then( (search) => {
                if (search) {
                    data(1)
                }
                else {
                    Tags.create({
                        guild_id: guild_id,
                        channel_id: channel_id,
                        type: type
                    });

                    data(0)
                }
            })
        }
        catch (error) {
            data(2)
        }
    })
    return promise;
}