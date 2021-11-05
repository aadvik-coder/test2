// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA4floLwDUG2YTLk1WwwHIEhMiVduix7-4",
    authDomain: "chatfriends-2ac34.firebaseapp.com",
    databaseURL: "https://chatfriends-2ac34-default-rtdb.firebaseio.com",
    projectId: "chatfriends-2ac34",
    storageBucket: "chatfriends-2ac34.appspot.com",
    messagingSenderId: "770548234874",
    appId: "1:770548234874:web:2357649337825028bb59c3",
    measurementId: "G-9KGSFJZ9TT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
}