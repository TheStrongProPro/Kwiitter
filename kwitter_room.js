document.getElementById("user_name").innerHTML =
    "Welcome " + localStorage.getItem("user_name") + " !";

var firebaseConfig = {
    apiKey: "AIzaSyAGEQRGEM_BMKjcCtg1VuyHaVkAgYv6QZc",

    authDomain: "kwitter-292b8.firebaseapp.com",

    databaseURL: "https://kwitter-292b8-default-rtdb.firebaseio.com",

    projectId: "kwitter-292b8",

    storageBucket: "kwitter-292b8.appspot.com",

    messagingSenderId: "915422623358",

    appId: "1:915422623358:web:ead9b2e2ae44e9c8daca2f",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function getData() {
    firebase
        .database()
        .ref("/")
        .on("value", function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row =
                    "<div class='room_name' id='" +
                    Room_names +
                    "' onclick='redirectToRoomName(this.id)'>#" +
                    Room_names +
                    "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name",
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


function logout() {
    localStorage.removeItem('user_name')
    localStorage.removeItem('room_name')
    window.location = "index.html"
}