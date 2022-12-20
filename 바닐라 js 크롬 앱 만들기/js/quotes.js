const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다",
        author : "키케로"

    },
    {
        quote : "인생은 아름다워",
        author : "서태규"
    },
    {
        quote : "산다는것 그것은 치열한 전투이다.",
        author : "로망로랑"
    },
    {
        quote : "언제나 현재에 집중할수 있다면 행복할것이다.",
        author : "사무엘존슨"
    },
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author : "사무엘존슨"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const ramdomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = ramdomQuotes.quote;
author.innerText = ramdomQuotes.author;