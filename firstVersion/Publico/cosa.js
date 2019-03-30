
function submitClick(){
	var myform=document.getElementById("formElement");
	var tit=myform.elements[0].value;
	var name=myform.elements[1].value;
	var correo=myform.elements[2].value;
	var info=myform.elements[3].value;
	var img=myform.elements[4];
// Create a root reference
	var storageRef = firebase.storage().ref();

	var firebaseRef=firebase.database().ref('Recetas/');
		firebaseRef.push({
		title:tit,
		mail:correo,
		username: name,
		info: info,
		url:hola,
	});
}
