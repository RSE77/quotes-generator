const myButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");

// Get Quotes From API
let apiQuotes = [];

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

async function getQuotes() {
    loading();
    const apiUrl = 'https://api.quotable.io/random';
    try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    complete();
//Catch Error Here 
     } catch(error) {
    alert('error occured');
}}

function newQuote() {
    loading();
    myButton.onclick = getQuotes;
    
    quoteText.textContent = `${apiQuotes.content}`;
    authorText.textContent = `${apiQuotes.author}`;
    complete();
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

}

myButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);

//On Load
getQuotes();
