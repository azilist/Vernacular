$(function () {
  $(document).click(function (event) {
    $(".navbar-collapse").collapse("hide");
  });
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBac7GsNBIS-DTs6fX9H2dxZJN-84OXzY0",
  authDomain: "vernacular-magazine.firebaseapp.com",
  databaseURL: "https://vernacular-magazine-default-rtdb.firebaseio.com",
  projectId: "vernacular-magazine",
  storageBucket: "vernacular-magazine.appspot.com",
  messagingSenderId: "853540651723",
  appId: "1:853540651723:web:4fcc2f0109df37bfd2514e",
  measurementId: "G-8Z03XG7FWM",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
