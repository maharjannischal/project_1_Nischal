

let quotes =[{quote:"The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors", // creating three quote object literals
             source : "Napoleon Hill",                     // has source and year.
             year: "1970"},
             
              {quote:"Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things",
               source : "Ray Bradbury" ,                // has source and citation.
               citation : "Google"},
             
              {quote:"Just Do it ",
              source : "NIKE"},
              
              {quote:"The worst things in life come free to us", 
              source : "ED Sheeran"},
             
              {quote:"Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness. ", 
              source : "Gilgamesh."
               }];

console.log(quotes);                                                       // checking the quote array in the console.


function getRandomQuote(){                                                // creating a function to generate the random quote
 let randomnum = Math.floor(Math.random() * quotes.length);               // generates the random quote.
 return quotes[randomnum];                                
}
 
console.log(getRandomQuote());                                            // checking on the console if the random quote works.


function  printQuote(){                                                   // creating a printfunction to display the result.
          let randomQuote =getRandomQuote();                              // calling the function getRandomQuote();
          let message =' ';                                                // declaring an empty variable to store the result.
           message = "<p class='quote'>" +randomQuote.quote + "</p>";
           message += "<p class='source'>" + randomQuote.source;

  if (randomQuote.citation !== undefined){                                // checking if the quotes array properties have citation , if yes do the following.
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year !== undefined){
   message += '<span class="year">' + randomQuote.year + '</span>';     // checking if the quotes array properties have year property.
  }
    message += '</p>';

  
  let quoteDiv = document.getElementById('quote-box');       
  quoteDiv.innerHTML = message;                                           // connecting with the HTML  which inserts the result inside <div id="quote-box">
  }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);     // function works when the show another quote is pressed.



