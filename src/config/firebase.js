import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVQCQOKRryzIafspm4k0MersRBt_JicvA",
    authDomain: "veganet-82701.firebaseapp.com",
    databaseURL: "https://veganet-82701.firebaseio.com",
    projectId: "veganet-82701",
    storageBucket: "veganet-82701.appspot.com",
    messagingSenderId: "539139930717",
    appId: "1:539139930717:web:b1dfa86b91fb1c3b"
  };

const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;
