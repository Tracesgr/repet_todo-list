  // Your web app's Firebase configuration
  import * as firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyC1oeiRFe1xlivEy2XalngrF0aFbttJLnY",
    authDomain: "todos-react-7fb7a.firebaseapp.com",
    databaseURL: "https://todos-react-7fb7a.firebaseio.com",
    projectId: "todos-react-7fb7a",
    storageBucket: "todos-react-7fb7a.appspot.com",
    messagingSenderId: "19317713001",
    appId: "1:19317713001:web:94b90776e4fafc77785af8",
    measurementId: "G-XE0P2YG1DS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const todoData = firebase.database().ref('node1');