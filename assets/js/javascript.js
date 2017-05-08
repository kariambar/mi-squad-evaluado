function Squad(nombre, apellido, edad, hobbies){
	this.nombre =  nombre ;
	this.apellido = apellido ;
	this.edad = edad ;
	this.hobbies =  hobbies;
}

var val = new Squad("Valentina", "Lopez", 25, "Tarot",);
var trini = new Squad("Trinidad", "Fuentes", 26, "video juegos");
var diana = new Squad("Diana", "Monsalve", 29, "Hacer scratch");
var pez = new Squad("Maria Paz", "Rojas", 26, "Música");
var maribel = new Squad("Maribel", "Diaz", 28, "Salir a tomar café");
var vale = new Squad("Valentina", "Toledo", 20, "jugar fútbol");
var kari = new Squad("Karina", "Palacios", 24, "Ver series");
var gilia = new Squad("Gilia", "Góngora", 28, "Escuchar música");


var revelarval = document.getElementById("val");
var revelartrini = document.getElementById("trini");
var revelardiana = document.getElementById("diana");
var revelarpez = document.getElementById("pez");
var revelarmaribel = document.getElementById("maribel");
var revelarvale = document.getElementById("vale");
var revelarkari = document.getElementById("kari");
var revelargilia = document.getElementById("gilia");

revelargilia.innerHTML = "<strong>Nombre: </strong>" + gilia.nombre + " " + gilia.apellido +
"<br> <strong>Edad: </strong>" + vale.edad +"<br> <strong>Hobbies: </strong> <li>" + gilia.hobbies + "</li>";

revelarkari.innerHTML = "<strong>Nombre: </strong>" + kari.nombre + " " + kari.apellido +
"<br> <strong>Edad: </strong>" + kari.edad +"<br> <strong>Hobbies: </strong> <li>" + kari.hobbies + "</li>";

revelarvale.innerHTML = "<strong>Nombre: </strong>" + vale.nombre + " " + vale.apellido +
"<br> <strong>Edad: </strong>" + vale.edad +"<br> <strong>Hobbies: </strong> <li>" + vale.hobbies + "</li>";

revelarmaribel.innerHTML = "<strong>Nombre: </strong>" + maribel.nombre + " " + maribel.apellido +
"<br> <strong>Edad: </strong>" + maribel.edad +"<br> <strong>Hobbies: </strong> <li>" + maribel.hobbies + "</li>";

revelarpez.innerHTML = "<strong>Nombre: </strong>" + pez.nombre + " " + pez.apellido +
"<br> <strong>Edad: </strong>" + pez.edad +"<br> <strong>Hobbies: </strong> <li>" + pez.hobbies + "</li>";

revelardiana.innerHTML = "<strong>Nombre: </strong>" + diana.nombre + " " + diana.apellido +
"<br> <strong>Edad: </strong>" + diana.edad +"<br> <strong>Hobbies: </strong> <li>" + diana.hobbies + "</li>";

revelartrini.innerHTML = "<strong>Nombre: </strong>" + trini.nombre + " " + trini.apellido +
"<br> <strong>Edad: </strong>" + trini.edad +"<br> <strong>Hobbies: </strong> <li>" + trini.hobbies + "</li>";

revelarval.innerHTML = "<strong>Nombre: </strong>" + val.nombre + " " + val.apellido +
"<br> <strong>Edad: </strong>" + val.edad +"<br> <strong>Hobbies: </strong> <li>" + val.hobbies + "</li>";

