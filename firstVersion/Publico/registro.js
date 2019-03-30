
  console.log("hola");
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC5n5vAYtpY3pmzPHilsa0ZpEwPrS1JoXI",
    authDomain: "natura-aebed.firebaseapp.com",
    databaseURL: "https://natura-aebed.firebaseio.com",
    projectId: "natura-aebed",
    storageBucket: "natura-aebed.appspot.com",
    messagingSenderId: "648423816836"
  };
  firebase.initializeApp(config);
  const txtEmail= document.getElementById('textEmail');
  const txtPass= document.getElementById('textPass');
const bttnSU= document.getElementById('bttnSingUp');
const bttnLO= document.getElementById('bttnLogOut');

bttnSU.addEventListener('click', e=>{
//Get email and password
  const email= txtEmail.value;
  const pass= txtPass.value;
  const auth= firebase.auth();

//Sign Up
const promise=auth.createUserWithEmailAndPassword(email,pass);
console.log("hola");
console.log(e.message);
promise.catch(e=>console.log(e.message));
});

//Real time listener
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser){
    console.log(firebaseUser);
  }else{
    console.log('not logged in');
  }
})
