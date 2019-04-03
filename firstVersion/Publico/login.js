//console.log("hola login");
  // Initialize Firebase
  var config = {
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
const bttnLI=  document.getElementById('bttnLogin');
//const bttnSU= document.getElementById('bttnSingUp');
const bttnLO= document.getElementById('bttnLogOut');

bttnLI.addEventListener('click', e => {
//Get email and password
  const email= txtEmail.value;
  const pass= txtPass.value;
const auth= firebase.auth();
console.log('trying log in')
//Sign In
const promise=auth.signInWithEmailAndPassword(email,pass);
promise.catch(e => console.log(e.message));

});

bttnLO.addEventListener('click', e=>{
  firebase.auth().signOut();
  console.log("bye");
});

//add realtime Listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    console.log('log in '+ firebaseUser );
  }
  else{
    console.log('not logged in');
  }
});
