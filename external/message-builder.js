// Printing Method Called to Post Embeds
const { EmbedBuilder } = require('discord.js');
const scrape = require('./web-scrape.js')

exports.build = () => {
    const promise = new Promise(embeds => {
        // Ikes, SS, Globe, FR, Spot
        const names = ["Ike's",
            "Southside",
            "The Globe",
            "Front Royale",
            "The Spot"]

        const urls = ["https://menus.sodexomyway.com/BiteMenu/Menu?menuId=35763&locationId=27747017&whereami=http://masondining.sodexomyway.com/dining-near-me/ikes",
            "https://menus.sodexomyway.com/BiteMenu/Menu?menuId=16652&locationId=27747003&whereami=http://masondining.sodexomyway.com/dining-near-me/southside",
            "https://menus.sodexomyway.com/BiteMenu/Menu?menuId=36397&locationId=27747052&whereami=http://masondining.sodexomyway.com/dining-near-me/the-globe",
            "https://menus.sodexomyway.com/BiteMenu/Menu?menuId=16478&locationId=27747024&whereami=http://masondining.sodexomyway.com/dining-near-me/front-royal",
            "https://menus.sodexomyway.com/BiteMenu/Menu?menuId=32761&locationId=27747049&whereami=http://masondining.sodexomyway.com/dining-near-me/the-spot"]

        const colors = [0x9402d8,
            0xfc2600,
            0x0fd802,
            0x2fadff,
            0xf5fc00]

        let menus = [[],
            [],
            [],
            [],
            []]

        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        for (let i = 0; i < 5; i++) {
            scrape.getMenuInfo(urls[i])
                .then((suc, err) => {
                    const menu = new EmbedBuilder()
                        .setColor(colors[i])
                        .setTitle(suc[i])   // Suc ERROR
                        .setAuthor({ name: names[i], iconURL: 'https://i.imgur.com/AfFp7pu.png', url: urls[i] })
                        .setDescription(`${day}/${month}/${year}`)
                        .setFooter({ text: 'Node.JS > Python', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                    if (err != null) {
                        menu.addFields({ name: "No Menu Available Today", value: "Warning: Be careful of taking the gamble. Check out other dining halls instead" });
                        menus[i].push(menu)
                    }
                    else {
                        for (let i = 0; i < suc.length; i += 2) {
                            for (let j = 0; j < suc[i + 1].length; j += 2) {
                                menu.addFields({ name: suc[i + 1][j], value: suc[i + 1][j + 1].toString().replace(/,/g, '\n'), inline: true });
                            }
                            menus[i].push(menu)
                        }
                    }
                    embeds(menus);
                });
        }
    })
    return promise;

}




