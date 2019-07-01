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
    let advendureList = ['Indiana Jones', 'Inglourious Basterds', 'Back to the Future' , 'O Brother, Where Art Thou', ''];
    let actionList = [];
    let comedyList = [];
    let romanceList = [];


    $('#movie-button').on('click', function(){

    let title = $('#search').val();
    console.log(title);
    let queryURL = 'https://www.omdbapi.com/?t=' + title + '&apikey=d56ade4e';

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(results) {
      console.log(results);
    });
  })


//variables set at 0 for each genre

let adventureCount = 0;
let comedyCount = 0;
let actionCount = 0;
let romanceCount = 0;
let dramaCount = 0;
let horrorCount = 0;
let docuCount = 0;
let fantasyCount = 0;
let scifiCount = 0;


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

function horrorPlus () {
  horrorCount++;
  console.log("horrorCount: " + horrorCount);
}

function docuPlus () {
  docuCount++;
  console.log("docuCount: " + docuCount);
}

function fantasyPlus () {
  fantasyCount++;
  console.log("fantasyCount: " + fantasyCount);
}

function scifiPlus () {
  scifiCount++;
  console.log("scifiCount: " + scifiCount);
}
//function that disables button from being clicked more than once

function stopClick() {
  $(this).prop('disabled', true);
}

//functions called on click

$('#option_1').click(adventurePlus).click(stopClick);
$('#option_2').click(comedyPlus).click(stopClick);
$('#option_3').click(actionPlus).click(stopClick);
$('#option_4').click(romancePlus).click(stopClick);

$('#option_5').click(adventurePlus).click(stopClick);
$('#option_6').click(comedyPlus).click(stopClick);
$('#option_7').click(actionPlus).click(stopClick);
$('#option_8').click(romancePlus).click(stopClick);

$('#option_9').click(adventurePlus).click(stopClick);
$('#option_10').click(comedyPlus).click(stopClick);
$('#option_11').click(actionPlus).click(stopClick);
$('#option_12').click(romancePlus).click(stopClick);

$('#option_13').click(adventurePlus).click(stopClick);
$('#option_14').click(comedyPlus).click(stopClick);
$('#option_15').click(actionPlus).click(stopClick);
$('#option_16').click(romancePlus).click(stopClick);

$('#option_17').click(dramaPlus).click(stopClick);
$('#option_18').click(horrorPlus).click(stopClick);
$('#option_19').click(docuPlus).click(stopClick);
$('#option_20').click(scifiPlus).click(stopClick);

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
        console.log("Genre= Adventure");
        $("#resultButton").hide();
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
    console.log("Genre= Comedy");
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
    console.log("Genre= Action");
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
    console.log("Genre= Romance");
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
    console.log("Genre= Drama");
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
    console.log("Genre= Horror");
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
    console.log("Genre= Documentary");
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
    console.log("Genre= Fantasy");
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
    console.log("Genre= Sci-Fi");
    $("#resultButton").hide();
    
  }
  
})