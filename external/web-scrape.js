const cheerio = require('cheerio');
const request = require('request');

exports.getMenuInfo = function (url) {
    const promise = new Promise( (suc, err) => {
        let all_foods = []
        const date = new Date();
        request(url, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                const day_menu = $(`#menuid-${date.getDate()}-day`).html();
                if (day_menu == null) {
                    err("Invalid Day") // Throw Better Error
                }
                $('.accordion .accordion-block', day_menu).each(function (index, meal) {
                    const title = $(meal).children()[0]
                    all_foods.push($(title).text().replace(/\s\s+/g, ' ').trim())
                    const menu = $(meal).children()[1]
        
                    food = []
                    items = []
                    $("[class^='bite-menu-']", menu).each(function (i, entry) {
                        if (entry['name'] == 'ul') {
                            items = []
                            $(entry).children().each(function (j, item) {
                                items[j] = $('.col-xs-9', item).text().replace(/\s\s+/g, ' ').trim()
                            })
                            food[i]=items
                        }
                        else {
                            food[i]= $(entry).text().replace(/\s\s+/g, ' ').trim()
                        }
                    })
                    all_foods.push(food)
                })
                suc(all_foods);
            }
            else {
                err(error);
            }
        });
        
    })

    return promise;
}

