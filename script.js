import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loginButton = document.getElementById("loginButton");

function fakeLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const usersCollection = collection(db, "users");
  addDoc(usersCollection, {
    username: username,
    password: password,
  }).then(() => {
    alert("Login successful");
  }).catch((error) => {
    console.error("Error adding document: ", error);
    alert("Error saving data");
  });
}

loginButton.addEventListener("click", fakeLogin);
