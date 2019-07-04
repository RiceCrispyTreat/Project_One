//Joeys firebase stufffff
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
    let adventureList = ['Indiana Jones', 'Inglourious Basterds', 'Back to the Future' , 'O Brother, Where Art Thou', 'Big Fish', 'Spirited Away'];
    let actionList = ['Die Hard', 'Rambo', 'Predator', 'Last Action Hero', 'Aliens', 'Baby Driver'];
    let comedyList = ['Dumb and Dumber', 'Better Off Dead', 'Austin Powers', 'Shrek', 'The Other Guys', 'Elf'];
    let romanceList = ['The Notebook', 'P.S. I Love You', 'Mama Mia', 'Pretty In Pink', 'Sleepless In Seattle', 'Love Actually'];
    let horrorList = ['The Shining', 'The Exorcist', 'The Conjuring', 'Paranormal Activity', 'The Thing', 'The Blair Witch']

    function movieFind(genre){
      var searchArray;
      switch (genre) {
        default:
          searchArray = adventureList;
          break;
          case "Romance":
          searchArray = romanceList;
          break;
          case "action":
          searchArray = actionList;
          break;
          case "comedy":
          searchArray = comedyList;
          break;
          case "horror":
          searchArray =horrorList;
      }

      let queryURL = 'https://www.omdbapi.com/?t=' + searchArray[0] + '&apikey=d56ade4e';
    
      $.ajax({
        url: queryURL,
        method: 'GET'
      }).then(function(results) {
        // console.log(results);
      });
    }

//variables set at 0 for each genre
let adventureCount = 0;
let comedyCount = 0;
let actionCount = 0;
let romanceCount = 0;
let horrorCount = 0;

let genre = undefined;

//functions that increase the value of their genre
function adventurePlus () {
adventureCount++;
console.log("adventureCount: " + adventureCount);
}

function comedyPlus () {
comedyCount++;
console.log("comedyCount: " + comedyCount);
}

function actionPlus () {
actionCount++;
console.log("actionCount: " + actionCount);
}

function romancePlus () {
romanceCount++;
console.log("romanceCount: " + romanceCount);
}

function horrorPlus () {
horrorCount++;
console.log("horrorCount: " + horrorCount);
}

//function that disables button from being clicked more than once
function stopClick() {
$(this).prop('disabled', true);
}

//function that colors buttons when touched
function toggle() {
  $(this).css('opacity','0.2');
}

//functions called on click
$('#adventure, #adventure2').click(adventurePlus).click(toggle).click(stopClick);
$('#action, #action2').click(actionPlus).click(toggle).click(stopClick);
$('#comedy, #comedy2').click(comedyPlus).click(toggle).click(stopClick);
$('#romance, #romance2').click(romancePlus).click(toggle).click(stopClick);
$('#horror, #horror2').click(horrorPlus).click(toggle).click(stopClick);

//result text displayed
$("#subBtn").on('click', function adventureWins() {  
if ((adventureCount > comedyCount) && 
    (adventureCount > actionCount) && 
    (adventureCount > romanceCount) &&
    (adventureCount > horrorCount)
    ){
      $("img").hide();
      $("#resultText").append("<p>Your movie genre is: Adventure</p>");
      let genre = (adventureList);
      console.log("Genre: " + genre);
      $("#subBtn").hide();
      movieFind(genre);
      
    }
else if ((comedyCount > adventureCount) && 
(comedyCount > actionCount) && 
(comedyCount > romanceCount) &&
(comedyCount > horrorCount)
){
  $("img").hide();
  $("#resultText").append("<p>Your movie genre is: Comedy</p>");
  let genre = ("Comedy");
  console.log("Genre: " + genre);
  $("#subBtn").hide();
  
}
else if ((actionCount > adventureCount) && 
(actionCount > comedyCount) && 
(actionCount > romanceCount) &&
(actionCount > horrorCount)
){
  $("img").hide();
  $("#resultText").append("<p>Your movie genre is: Action</p>");
  let genre = ("Action");
  console.log("Genre: " + genre);
  $("#subBtn").hide();
}
else if ((romanceCount > adventureCount) && 
(romanceCount > actionCount) && 
(romanceCount > comedyCount) &&
(romanceCount > horrorCount)
){
  $("img").hide();
  $("#resultText").append("<p>Your movie genre is: Romance</p>");
  let genre = ("Romance");
  console.log("Genre: " + genre);
  $("#subBtn").hide();
}
else if ((horrorCount > adventureCount) && 
(horrorCount > actionCount) && 
(horrorCount > romanceCount) &&
(horrorCount > comedyCount)
){
  $("img").hide();
  $("#resultText").append("<p>Your movie genre is: Horror</p>");
  let genre = ("Horror");
  console.log("Genre: " + genre);
  $("#subBtn").hide();
}
})