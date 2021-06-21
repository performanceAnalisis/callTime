/*

function tiempoTel(){

let tabla= document.getElementById("gridview-1022-table");
let sumSegundos= 0;

let dimension= tabla.rows.length;


 
for (i = 1; i < tabla.rows.length; i++){

 
	let fila = document.getElementById("gridview-1022-record-ext-record-"+i)  //ultimo numero es la fila desde 0

	let filaStr= fila.innerText.split("\n"); //convierto fila en string
	
	arr= filaStr[6].split(":");
	callSegundos= arr[0]*3600 + arr[1]*60 + (+arr[2]);
	sumSegundos = callSegundos + sumSegundos;

	hours = Math.floor(sumSegundos / 3600);
	minutes = Math.floor((sumSegundos - (hours * 3600)) / 60);
	seconds = sumSegundos - (hours * 3600) - (minutes * 60);

	var timeResultadoString = hours.toString().padStart(2, '0') + ':' +
      	minutes.toString().padStart(2, '0') + ':' +
      	seconds.toString().padStart(2, '0');


}

alert("Tiempo al telefono: "+timeResultadoString+"\n"+"Cantidad de llamadas:  "+dimension)



}

tiempoTel();

*/

alert("hola");









