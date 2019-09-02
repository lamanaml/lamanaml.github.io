$(document).ready(function() {
    if ($('#newContact').length > 0 ) {
        contactScript('forcontact');
    }

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyABZ6IReJTdMC4YC4BV4hXjYNrm6g0xO8c",
    authDomain: "ldportfoliocontact.firebaseapp.com",
    databaseURL: "https://ldportfoliocontact.firebaseio.com",
    projectId: "ldportfoliocontact",
    storageBucket: "",
    messagingSenderId: "725751986328",
    appId: "1:725751986328:web:d562cb5d07141271"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



var b = firebase.database().ref("messages");
        $("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");
        var c = $("#name").val(),
            d = $("#email").val(),
            e = $("#message").val(),
            f = { name: c, email: d,  message: e};
        return b.push(f).then(function(a) { 
            $(".sucess").css("display", "block"), 
            $(".sucess-none").css("display", "none") }), !1 })   
})