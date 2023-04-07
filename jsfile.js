const cheerio = require("cheerio");
const axios = require("axios");

// Ссылка на сайт, который мы хотим распарсить
const url = "http://al-vo.ru/";

// Отправляем GET-запрос на сайт
axios.get(url).then(response => {
    // Получаем HTML-страницу
    const html = response.data;
    
    // Используем Cheerio для парсинга HTML-страницы
    const $ = cheerio.load(html);
    
    // Находим все заголовки статей на странице
    const articleHeaders = $("h2.article-header");
    
    // Выводим заголовки статей в консоль
    articleHeaders.each((i, header) => {
        console.log($(header).text());
    });
}).catch(error => {
    console.log("Ошибка запроса: ", error);
});
