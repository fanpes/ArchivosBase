console.log("Archivo nucleo.js Cargado Exitosamente");

//funcion extra para quitar acentos
function omitirAcentos(text) {
    var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
    for (var i=0; i<acentos.length; i++) {
        text = text.replace(acentos.charAt(i), original.charAt(i));
    }
    return text;
}


function verificar(){
//Operacion basica con la casena, pasar todas las letras a minusculas
var mensajeAverificar=pantalla.value.toLowerCase();
	mensajeAverificar=omitirAcentos(mensajeAverificar);
	mensajeAverificar = mensajeAverificar.replace(/\!\"\#\$\%\&\'\(\)\*\+\,\-\.\:\;\<\=\>\?/, ' ');
//Se convierte en un array utilizando  los espacios como separadores de cada elemento de la matriz
	mensajeAverificar=mensajeAverificar.split(" ");
//Se vuelven a juntar los elementos de la matriz, esta vez sin espacio
	mensajeAverificar=mensajeAverificar.join("");
var mensajeInverso=mensajeAverificar.split("");
	mensajeInverso=mensajeInverso.reverse();
	mensajeInverso=mensajeInverso.join("");
		if (mensajeAverificar==mensajeInverso){
		console.log("El mensaje es un palindromo");
		document.getElementById("detector").style.backgroundColor="green";
		}
		else if(mensajeAverificar!=mensajeInverso){
			console.log("el mensaje no es un palindromo")
			document.getElementById("detector").style.backgroundColor="red";
			}
		if(mensajeAverificar==""){detector.style.backgroundColor="grey";
}
}