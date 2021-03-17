// Get Quotes From API
let apiQuotes = [];

function getNewQuote() {
    const quote = apiQuotes[Math.random(Math.floor() * apiQuotes.length)];
    console.log(quote);
}

async function getQuotes() {
    try {
    
    const apiUrl = 'https://api.quotable.io/random';
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    getNewQuote();
    console.log(apiQuotes)
//Catch Error Here 
     } catch(error) {
    alert('error occured');
}}

//On Load
getQuotes();
