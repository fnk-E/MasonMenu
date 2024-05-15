const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const scrape = require('../../external/web-scrape.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('menu-embed')
        .setDescription('Builds Example Embed of Menu'),
	async execute(interaction) {
        await interaction.deferReply();
		await scrape.getMenuInfo("https://menus.sodexomyway.com/BiteMenu/Menu?menuId=16478&locationId=27747024&whereami=http://masondining.sodexomyway.com/dining-near-me/front-royal")
        .then( (suc, err) => {  // ERR HANDLING
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            console.log(`${month}/${day}/${year}`);
            for (let i = 0; i < suc.length; i += 2) {
                const menu = new EmbedBuilder()
                    .setColor(0x2fd3ff)
                    .setTitle(suc[i])
                    // .setURL('https://menus.sodexomyway.com/BiteMenu/Menu?menuId=35763&locationId=27747017&whereami=http://masondining.sodexomyway.com/dining-near-me/ikes')
                    .setAuthor({ name: 'Ike\s', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://menus.sodexomyway.com/BiteMenu/Menu?menuId=35763&locationId=27747017&whereami=http://masondining.sodexomyway.com/dining-near-me/ikes' })
                    .setDescription(`${day}/${month}/${year}`)
                    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
                    .setTimestamp()
                    .setFooter({ text: 'Node.JS > Python', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                
                for (let j = 0; j<suc[i+1].length; j += 2) {
                    menu.addFields( {name: suc[i+1][j], value: suc[i+1][j+1].toString().replace(/,/g, '\n'), inline: true});
                }
                interaction.followUp({ embeds: [menu] })
                    .then( (message) => {
                        message.react('⬆️');
                        message.react('🔻');
                    });
                
            }
            
        })
        
	}
};







