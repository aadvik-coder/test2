// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA4floLwDUG2YTLk1WwwHIEhMiVduix7-4",
  authDomain: "chatfriends-2ac34.firebaseapp.com",
  databaseURL: "https://chatfriends-2ac34-default-rtdb.firebaseio.com",
  projectId: "chatfriends-2ac34",
  storageBucket: "chatfriends-2ac34.appspot.com",
  messagingSenderId: "770548234874",
  appId: "1:770548234874:web:8d6e7ed22e6064b4bb59c3",
  measurementId: "G-HKTWT3FXQ8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "chat_room.html";
}
function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
        "";
      snapshot.forEach(function (childSnapshot) {
        childKey =
          childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id);' >" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room name", name);
  window.location = "chat_room.html"

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "Chatfriends.html"
}