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

    

$('#option_1').prepend('<img id="theImg" src="assets/images/dino-jirf.jpg" style="width:100px;height:100px;"/>')
$('#option_2').prepend('<img id="theImg" src="assets/images/fly-dino.jpg" style="width:100px;height:100px;"/>')