/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes =[{quote:"The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors", source : "Napoleon Hill",year: " 1970"},
             
              {quote:"Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things", source : "Ray Bradbury" ,citation : "Google "},
             
              {quote:"Just Do it ",source : " NIKE"},
              
             {quote:"The worst things in life come free to us", source : "ED Sheeran"},
             
              {quote:"Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness. ", source : "ABCD"
              }];

console.log(quotes);


function getRandomQuote(){
 let randomnum = Math.floor(Math.random() * quotes.length);
 return quotes[randomnum];
}

console.log(getRandomQuote());





function  printQuote(){
 let randomQuote =getRandomQuote();
  let message ='';
  message = "<p class='quote'>" +randomQuote.quote + "</p>";
message += "<p class='source'>" + randomQuote.source;
  if (randomQuote.citation !== undefined){
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year !== undefined){
   message += '<span class="year">' + randomQuote.year + '</span>';
  }
    message += '</p>';
let quoteDiv = document.getElementById('quote-box');
  quoteDiv.innerHTMl = message;
  }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



 

  
  




  




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/



// Remember to delete the comments that came with this file, and replace them with your own code comments