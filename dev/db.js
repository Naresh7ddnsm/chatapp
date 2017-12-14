import firebase from 'firebase';
var config = {
		apiKey: "AIzaSyBBuHQrQ7e4t8loCBPl_aC-ARh4u2A309k",
		authDomain: "charapp-4f702.firebaseapp.com",
		databaseURL: "https://charapp-4f702.firebaseio.com",
		projectId: "charapp-4f702",
		storageBucket: "charapp-4f702.appspot.com",
		messagingSenderId: "30536760302"
	};
firebase.initializeApp(config);

export default firebase;