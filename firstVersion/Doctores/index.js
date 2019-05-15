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
function submitClick(){
	var myform=document.getElementById("formElement");
	var tit=myform.elements[0].value;
	var name=myform.elements[1].value;
	var correo=myform.elements[2].value;
	var info=myform.elements[3].value;
	var img=myform.elements[4];
// Create a root reference
	var storageRef = firebase.storage().ref();
	var num=Math.random()*(1000000000000-1000)+1000;
// Create a reference to 'images/mountains.jpg'
	var ImagesRef = storageRef.child('imagenes/'+num+'.jpg').put(img.files[0]).then(function(){
	var ima=firebase.storage().ref('imagenes/'+num+'.jpg').getDownloadURL().then(function(url){

		var firebaseRef=firebase.database().ref('Recetas/');
		firebaseRef.push({
		title:tit,
		mail:correo,
		username: name,
		info: info,
		imgUrl:url,
	});

		
	})});


myform.reset();
}
