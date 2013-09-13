console.log("Archivo nucleo.js Cargado Exitosamente");
var suma=false;
var numeroGuardado=0;

function agregarNumero(numero){
pantalla.value=parseInt(pantalla.value)*10+ parseInt(numero);
}

function activarBandera(bandera){
	if(bandera=="SUMA"){
		suma=true;
		numeroGuardado=parseInt(pantalla.value);
		console.log("Se activo Sumar);
	}
	
}