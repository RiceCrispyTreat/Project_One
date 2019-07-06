//firebase key
var firebaseConfig = {
  apiKey: "AIzaSyC5oiOA7TPZ-bh4y0DhUPj-o4rAIxz8tO8",
  authDomain: "mood-quiz.firebaseapp.com",
  databaseURL: "https://mood-quiz.firebaseio.com",
  projectId: "mood-quiz",
  storageBucket: "",
  messagingSenderId: "296482666275",
  appId: "1:296482666275:web:9764064bf1a80f75"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database();


// OMDb API key & AJAX
let adventureList = ['Indiana Jones', 'Inglourious Basterds', 'Back to the Future', 'O Brother, Where Art Thou', 'Big Fish', 'Spirited Away'];
let actionList = ['Die Hard', 'Rambo', 'Predator', 'Last Action Hero', 'Aliens', 'Baby Driver'];
let comedyList = ['Dumb and Dumber', 'Better Off Dead', 'Austin Powers', 'Shrek', 'The Other Guys', 'Elf'];
let romanceList = ['The Notebook', 'P.S. I Love You', 'Mama Mia', 'Pretty In Pink', 'Sleepless In Seattle', 'Love Actually'];
let horrorList = ['The Shining', 'The Exorcist', 'The Conjuring', 'Paranormal Activity', 'The Thing', 'The Blair Witch'];

let genreList = {
  "Adventure": adventureList,
  "Action": actionList,
  "Comedy": comedyList,
  "Romance": romanceList,
  "Horror": horrorList
}

// takes button and adds movie title, rating, plot, and poster.
function displayMovie (genre) {

  let movie = genreList[genre][Math.round(Math.random()*genreList[genre].length)];

  let queryURL = 'https://www.omdbapi.com/?t=' + movie + '&apikey=d56ade4e';

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function (response) {
    let movieDiv = $("<div class='movie'>");
    let title = response.Title;
    let release = response.Released;
    let rating = response.Rating;
    let plot = response.Plot;
    let imgURL = response.Poster;
    let p = $("<p>").text(title);
    let poster = $("<img>").attr("src", imgURL);
    let pOne = $("<p>").text("Released: " + release);
    let pTwo = $("<p>").text("Rating: " + rating);
    let pThree = $("<p>").text("Plot: " + plot);
    movieDiv.append(p);
    movieDiv.append(poster);
    movieDiv.append(pOne);
    movieDiv.append(pTwo);
    movieDiv.append(pThree);
    $("#showMovie").prepend(movieDiv);
    // movieDiv.append(pOne);
    // movieDiv.append(pTwo);
    // movieDiv.append(pThree);
    // movieDiv.append(poster);
    console.log(response);
    
  });
}

function movieButton() {
  $('#buttons').empty();
  
  for (let i = 0; i < movies.length; i++) {

  }
}
//variables set at 0 for each genre
let adventureCount = 0;
let comedyCount = 0;
let actionCount = 0;
let romanceCount = 0;
let horrorCount = 0;

let genre = undefined;

//functions that increase the value of their genre
function adventurePlus() {
  adventureCount++;
  console.log("adventureCount: " + adventureCount);
}

function comedyPlus() {
  comedyCount++;
  console.log("comedyCount: " + comedyCount);
}

function actionPlus() {
  actionCount++;
  console.log("actionCount: " + actionCount);
}

function romancePlus() {
  romanceCount++;
  console.log("romanceCount: " + romanceCount);
}

function horrorPlus() {
  horrorCount++;
  console.log("horrorCount: " + horrorCount);
}

//function that disables button from being clicked more than once
function stopClick() {
  $(this).prop('disabled', true);
}

//function that colors buttons when touched
function toggle() {
  $(this).css('opacity', '0.2');
}


//functions called on click
$('#adventure, #adventure2').click(adventurePlus).click(toggle).click(stopClick);
$('#action, #action2').click(actionPlus).click(toggle).click(stopClick);
$('#comedy, #comedy2').click(comedyPlus).click(toggle).click(stopClick);
$('#romance, #romance2').click(romancePlus).click(toggle).click(stopClick);
$('#horror, #horror2').click(horrorPlus).click(toggle).click(stopClick);

//result text displayed
$("#subBtn").on('click', function adventureWins() {
  let genre = "None";
  if ((adventureCount > comedyCount) &&
    (adventureCount > actionCount) &&
    (adventureCount > romanceCount) &&
    (adventureCount > horrorCount)
  ) {
    $(".genreImg").hide();
    $("#resultText").append("<p>Your movie genre is: Adventure</p>");
    genre = ("Adventure")
    console.log("Genre: " + genre);
    $("#subBtn").hide();

  }
  else if ((comedyCount > adventureCount) &&
    (comedyCount > actionCount) &&
    (comedyCount > romanceCount) &&
    (comedyCount > horrorCount)
  ) {
    $(".genreImg").hide();
    $("#resultText").append("<p>Your movie genre is: Comedy</p>");
    genre = ("Comedy");
    console.log("Genre: " + genre);
    $("#subBtn").hide();

  }
  else if ((actionCount > adventureCount) &&
    (actionCount > comedyCount) &&
    (actionCount > romanceCount) &&
    (actionCount > horrorCount)
  ) {
    $(".genreImg").hide();
    $("#resultText").append("<p>Your movie genre is: Action</p>");
    genre = ("Action");
    console.log("Genre: " + genre);
    $("#subBtn").hide();
  }
  else if ((romanceCount > adventureCount) &&
    (romanceCount > actionCount) &&
    (romanceCount > comedyCount) &&
    (romanceCount > horrorCount)
  ) {
    $(".genreImg").hide();
    $("#resultText").append("<p>Your movie genre is: Romance</p>");
    genre = ("Romance");
    console.log("Genre: " + genre);
    $("#subBtn").hide();
  }
  else if ((horrorCount > adventureCount) &&
    (horrorCount > actionCount) &&
    (horrorCount > romanceCount) &&
    (horrorCount > comedyCount)
  ) {
    $(".genreImg").hide();
    $("#resultText").append("<p>Your movie genre is: Horror</p>");
    genre = ("Horror");
    console.log("Genre: " + genre);
    $("#subBtn").hide();
  }

  displayMovie(genre);
})