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


//variables set at 0 for each genre

let adventureCount = 0;
let comedyCount = 0;
let actionCount = 0;
let romanceCount = 0;
let dramaCount = 0;
let horrorCount = 0;
let docuCount = 0;
let fantasyCount = 0;


//functions that increase value of their genre

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

$('#option_17').click(adventurePlus).click(stopClick);
$('#option_18').click(comedyPlus).click(stopClick);
$('#option_19').click(actionPlus).click(stopClick);
$('#option_20').click(romancePlus).click(stopClick);