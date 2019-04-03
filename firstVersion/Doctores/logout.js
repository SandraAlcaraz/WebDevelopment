const config = {
  apiKey: "AIzaSyC5n5vAYtpY3pmzPHilsa0ZpEwPrS1JoXI",
  authDomain: "natura-aebed.firebaseapp.com",
  databaseURL: "https://natura-aebed.firebaseio.com",
  projectId: "natura-aebed",
  storageBucket: "natura-aebed.appspot.com",
  messagingSenderId: "648423816836"
};
firebase.initializeApp(config);
const bttnLO= document.getElementById('bttnLogOut');


bttnLO.addEventListener('click', e=>{
firebase.auth().signOut();
}
);
//Real time listener
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser){
    console.log(firebaseUser);
  }else{
      window.location.href="../Publico/login.html";
    console.log('not logged in');
  }
});
