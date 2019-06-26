import firebase from '../config/firebase.js';
const dataBase = firebase.firestore();

function signup(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((u) => {
  }).then((u) => { console.log(u) })
    .catch((error) => {
      console.log(error);
    })
};

function signin(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then((u) => {
  }).catch((error) => {
    alert("Correo y/o Contraseña inválidos");
  });
}

function logout() {
  firebase.auth().signOut();
}



function sendPost(textarea) {
  dataBase.collection("posts").add({
      comment: textarea,
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  })
}

// function getPosts() {
//   dataBase.collection("posts").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       doc.data().comment
//     });
// });
// }



export default {
  signup,
  signin,
  logout,
  sendPost
};
