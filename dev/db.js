import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBMyjsgCBlW15d7Qa5lQRJ4WjXl8HDtuLs",
    authDomain: "chatapp-fb116.firebaseapp.com",
    databaseURL: "https://chatapp-fb116.firebaseio.com",
    projectId: "chatapp-fb116",
    storageBucket: "chatapp-fb116.appspot.com",
    messagingSenderId: "798610005600"
  };
  firebase.initializeApp(config);

export default firebase;