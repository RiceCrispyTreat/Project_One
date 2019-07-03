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
    
    let resultArr = 

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
      }

      let queryURL = 'https://www.omdbapi.com/?t=' +  + '&apikey=d56ade4e';
    
      $.ajax({
        url: queryURL,
        method: 'GET'
      }).then(function(results) {
        console.log(results);
      });
    }

  //$('#movie-button').on('click', dasuGudFunction);

// movieFind(romanceList[0]);

//variables set at 0 for each genre
let adventureCount = 0;
let comedyCount = 0;
let actionCount = 0;
let romanceCount = 0;

// let dramaCount = 0;
// let horrorCount = 0;
// let docuCount = 0;
// let fantasyCount = 0;
// let scifiCount = 0;

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

function dramaPlus () {
dramaCount++;
console.log("dramaCount: " + dramaCount);
}

// function horrorPlus () {
// horrorCount++;
// console.log("horrorCount: " + horrorCount);
// }

// function docuPlus () {
// docuCount++;
// console.log("docuCount: " + docuCount);
// }

// function fantasyPlus () {
// fantasyCount++;
// console.log("fantasyCount: " + fantasyCount);
// }

// function scifiPlus () {
// scifiCount++;
// console.log("scifiCount: " + scifiCount);
// }

//function that disables button from being clicked more than once
function stopClick() {
$(this).prop('disabled', true);
}

//function that colors buttons when touched
function toggle() {
  $(this).css('background-color','aqua');
}

//functions called on click
$('#option_1').click(adventurePlus).click(toggle).click(stopClick);
$('#option_2').click(comedyPlus).click(toggle).click(stopClick);
$('#option_3').click(actionPlus).click(toggle).click(stopClick);
$('#option_4').click(romancePlus).click(toggle).click(stopClick);

$('#option_5').click(dramaPlus).click(toggle).click(stopClick);
$('#option_6').click(horrorPlus).click(toggle).click(stopClick);
$('#option_7').click(docuPlus).click(toggle).click(stopClick);
$('#option_8').click(fantasyPlus).click(toggle).click(stopClick);

$('#option_9').click(scifiPlus).click(toggle).click(stopClick);
$('#option_10').click(comedyPlus).click(toggle).click(stopClick);
$('#option_11').click(actionPlus).click(toggle).click(stopClick);
$('#option_12').click(romancePlus).click(toggle).click(stopClick);

$('#option_13').click(adventurePlus).click(toggle).click(stopClick);
$('#option_14').click(comedyPlus).click(toggle).click(stopClick);
$('#option_15').click(actionPlus).click(toggle).click(stopClick);
$('#option_16').click(romancePlus).click(toggle).click(stopClick);

$('#option_17').click(dramaPlus).click(toggle).click(stopClick);
$('#option_18').click(horrorPlus).click(toggle).click(stopClick);
$('#option_19').click(docuPlus).click(toggle).click(stopClick);
$('#option_20').click(scifiPlus).click(toggle).click(stopClick);


//result text displayed
$("#resultButton").on('click', function adventureWins() {  
if ((adventureCount > comedyCount) && 
    (adventureCount > actionCount) && 
    (adventureCount > romanceCount) &&
    (adventureCount > dramaCount) &&
    (adventureCount > horrorCount) &&
    (adventureCount > docuCount) &&
    (adventureCount > fantasyCount) &&
    (adventureCount > scifiCount)
    ){
      $("#buttons").hide();
      $("#resultText").append("<p>Your movie genre is: Adventure</p>");
      let genre = (adventureList);
      console.log("Genre: " + genre);
      $("#resultButton").hide();
      movieFind(genre);
      
    }
else if ((comedyCount > adventureCount) && 
(comedyCount > actionCount) && 
(comedyCount > romanceCount) &&
(comedyCount > dramaCount) &&
(comedyCount > horrorCount) &&
(comedyCount > docuCount) &&
(comedyCount > fantasyCount) &&
(comedyCount > scifiCount)
){
  $("#buttons").hide();
  $("#resultText").append("<p>Your movie genre is: Comedy</p>");
  let genre = ("Comedy");
  console.log("Genre: " + genre);
  $("#resultButton").hide();
  
}
else if ((actionCount > adventureCount) && 
(actionCount > comedyCount) && 
(actionCount > romanceCount) &&
(actionCount > dramaCount) &&
(actionCount > horrorCount) &&
(actionCount > docuCount) &&
(actionCount > fantasyCount) &&
(actionCount > scifiCount)
){
  $("#buttons").hide();
  $("#resultText").append("<p>Your movie genre is: Action</p>");
  let genre = ("Action");
  console.log("Genre: " + genre);
  $("#resultButton").hide();
  
}
else if ((romanceCount > adventureCount) && 
(romanceCount > actionCount) && 
(romanceCount > comedyCount) &&
(romanceCount > dramaCount) &&
(romanceCount > horrorCount) &&
(romanceCount > docuCount) &&
(romanceCount > fantasyCount) &&
(romanceCount > scifiCount)
){
  $("#buttons").hide();
  $("#resultText").append("<p>Your movie genre is: Romance</p>");
  let genre = ("Romance");
  console.log("Genre: " + genre);
  $("#resultButton").hide();
  
}
else if ((dramaCount > adventureCount) && 
(dramaCount > actionCount) && 
(dramaCount > romanceCount) &&
(dramaCount > comedyCount) &&
(dramaCount > horrorCount) &&
(dramaCount > docuCount) &&
(dramaCount > fantasyCount) &&
(dramaCount > scifiCount)
){
  $("#buttons").hide();
  $("#resultText").append("<p>Your movie genre is: Drama</p>");
  let genre = ("Drama");
  console.log("Genre: " + genre);
  $("#resultButton").hide();
  
}
else if ((horrorCount > adventureCount) && 
(horrorCount > actionCount) && 
(horrorCount > romanceCount) &&
(horrorCount > dramaCount) &&
(horrorCount > comedyCount) &&
(horrorCount > docuCount) &&
(horrorCount > fantasyCount) &&
(horrorCount > scifiCount)
){
  $("#buttons").hide();
  $("#resultText").append("<p>Your movie genre is: Horror</p>");
  let genre = ("Horror");
  console.log("Genre: " + genre);
  $("#resultButton").hide();
  
  
}
else if ((docuCount > adventureCount) && 
(docuCount > actionCount) && 
(docuCount > romanceCount) &&
(docuCount > dramaCount) &&
(docuCount > horrorCount) &&
(docuCount > comedyCount) &&
(docuCount > fantasyCount) &&
(docuCount > scifiCount)
){
  $("#buttons").hide();
  $("#resultText").append("<p>Your movie genre is: Documentary</p>");
  let genre = ("Documentary");
  console.log("Genre: " + genre);
  $("#resultButton").hide();
  
}
else if ((fantasyCount > adventureCount) && 
(fantasyCount > actionCount) && 
(fantasyCount > romanceCount) &&
(fantasyCount > dramaCount) &&
(fantasyCount > horrorCount) &&
(fantasyCount > docuCount) &&
(fantasyCount > comedyCount) &&
(fantasyCount > scifiCount)
){
  $("#buttons").hide();
  $("#resultText").append("<p>Your movie genre is: Fantasy</p>");
  let genre = ("Documentary");
  console.log("Genre: " + genre);
  $("#resultButton").hide();
  
}
else if ((scifiCount > adventureCount) && 
(scifiCount > actionCount) && 
(scifiCount > romanceCount) &&
(scifiCount > dramaCount) &&
(scifiCount > horrorCount) &&
(scifiCount > docuCount) &&
(scifiCount > comedyCount) &&
(scifiCount > fantasyCount)
){
  $("#buttons").hide();
  $("#resultText").append("<p>Your movie genre is: Sci-Fi</p>");
  let genre = ("Sci-Fi");
  console.log("Genre: " + genre);
  $("#resultButton").hide();
}

})
