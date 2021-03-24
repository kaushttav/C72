import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAngoxdTOX0W4_1vR_ykC948nvKApWFfD8",
    authDomain: "story-hub-2c80c.firebaseapp.com",
    projectId: "story-hub-2c80c",
    storageBucket: "story-hub-2c80c.appspot.com",
    messagingSenderId: "399495468352",
    appId: "1:399495468352:web:325b3a0e57c889a53556a5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()  