/******************************************
This project is designed to get a random 
quote from an array of quote objects.
The random quote will be printed to the 
screen when a button in the interface is
clicked on.
******************************************/


// Array of quote objects
var quotes = [
  {
    quote: 'It sounds plausible enough tonight, but wait until tomorrow. Wait for the common sense of the morning.',
    source: 'H.G. Wells',
    citation: 'The Time Machine',
    year: 1895,
    tag: ['helpful', 'interesting']
  },
  {
    quote: "It's much better to do good in a way that no one knows anything about it.",
    source: 'Leo Tolstoy',
    citation: 'Anna Karenina',
    year: 1877,
    tag: ['positive']
  },
  {
    quote: "The best way to cheer yourself up is to try to cheer somebody else up.",
    source: 'Mark Twain',
    tag: ['positive', 'funny']
  },
  {
    quote: "Better three hours too soon than a minute too late.",
    source: 'William Shakespeare',
    citation: 'The Merry Wives of Windsor',
    tag: ['helpful']
  },
  {
    quote: "Nothing is so painful to the human mind as a great and sudden change.",
    source: 'Mary Shelley',
    year: 1818,
    tag: ['interesting']
  }
]

// Get a random quote from the quotes array
const getRandomQuote = function() {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}


/* Print the random quote details to the page
    1. Get the random quote object
    2. Build a string of html to store the quote and quote source
    3. Test to see if quote citation and/or year are present and add them to the string if present
    4. Loop over the tag property and add each tag to the html string
    5. Return html string and print to page
*/

const printQuote = function() {

  const randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if ( randomQuote.citation ) {
    html += ` <span class="citation">${randomQuote.citation}</span>`
  }
  if ( randomQuote.year ) {
    html += ` <span class="year">${randomQuote.year}</span>`
  }
  html += `</p>`;

  for (i = 0; i < randomQuote.tag.length; i++ ) {
    tag = randomQuote.tag[i];
    html += `<span class="tag">${tag}</span>`  
  }

  // randomColor line found at: 
  // https://css-tricks.com/snippets/javascript/random-hex-color/
  const changeBackground = function() {
    const body = document.getElementsByTagName('body')[0];
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = `#${randomColor}`;
  }

  changeBackground();

  return document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);