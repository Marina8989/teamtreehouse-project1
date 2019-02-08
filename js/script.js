  //array of objects
  var quotes = [
   {
    quote: "In the process of letting go you will lose many things from the past, but you will find yourself.",
    source: "Deepak Chopra",
    citation: "Twitter " ,
   },
    {
    quote: "As you start to walk out on the way, the way appears.",
    source: "Rumi",
    category: ", Mind and Soul"
   },
   {
    quote: "When you want something, all the universe conspires in helping you to achieve it.",
    source: "Paulo Coelho",
    citation: "The Little Prince", 
    year: 1943,
   },
   {
    quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
    source: "Alan J. Perlis",
    citation: "Twitter",
    year: 2016,
    category: ", Technology",
   },
   {
    quote: "First, solve the problem. Then, write the code.",
    source: "John Johnson",
    category: ", Technology",

   },
   {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    source: "Cory House",
    category: ", Technology",
   },
   {
    quote: "Before software can be reusable it first has to be usable.",
    source: "Ralph Johnson",
    year: 2016,
    category: ", Technology",
   },
   {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    citation: "'Star Wars' movie",
    year: 1977,
   },
]


   function getRandomQuote(array) {
      //generate a random number
      var randomNumber = Math.floor(Math.random() * quotes.length) + 1;
      //loop through the length of the array
      for(i = 0; i < array.length; i++) {
         //random number quote
         var randomQuote = array[randomNumber];
      }
      //return a random quote
      return randomQuote;
    }


   function printQuote() {
     //call the function and store the result in variable
       var quote = getRandomQuote(quotes);
   
     //put string together and asign it to variable
        var stringOfQuoteProperties = "<p class='quote'>";
        stringOfQuoteProperties += quote.quote;
        stringOfQuoteProperties += "</p> <p class='source'>";
        stringOfQuoteProperties += quote.source;


     //check if citation property is present. If yes, display it on the screen
      if (typeof quote.citation != "undefined") {
        stringOfQuoteProperties += "<span class='citation'>";
        stringOfQuoteProperties += quote.citation;
        stringOfQuoteProperties += "</span>";
      };
     //check if year property is present. If yes, display it on the screen
      if (typeof quote.year != "undefined") {
        stringOfQuoteProperties += "<span class='year'>";
        stringOfQuoteProperties += quote.year;
        stringOfQuoteProperties += "</span>";
      };
     //check if category property is present. If yes, display it on the scrreen
      if (typeof quote.category != "undefined") {
        stringOfQuoteProperties += "<span class='category'>";
        stringOfQuoteProperties += quote.category;
        stringOfQuoteProperties += "</span>";
      };
      stringOfQuoteProperties += "</p>"

     //asign the created string to HTML 
       document.getElementById("quote-box").innerHTML = stringOfQuoteProperties;
      }


    //reusable function to create a random color
    function createColor() {
     return Math.floor(Math.random() * 256);
    }

    //random bg color generator
    function random_bg_color() {
  
    var red = createColor();
    var green = createColor();
    var blue = createColor();
    var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    
    document.body.style.background = bgColor;
   }

   //change quote every 20 sec
    setInterval('printQuote()', 20000);
   //change bg color every 20 sec
    setInterval('random_bg_color()', 20000);

    document.getElementById('loadQuote').addEventListener("click", printQuote, false);







