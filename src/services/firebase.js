import firebase from '../config/firebase.js';

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

export default {
  signup,
  signin,
  logout
};
