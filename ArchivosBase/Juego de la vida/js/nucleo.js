console.log("Archivo nucleo.js Cargado Exitosamente");
var canvas= document.getElementById("Escenario");
var contexto= canvas.getContext("2d");

	var bacteria={
	 x:0,
	 y:0,
	 width:5,
	 height:5,
	 estado:"viva"
	};	
	var tablero=new Array();
	
	for(var i=0;i<100;i++){
		for(var j=0;j<100;j++){
		tablero[i][j].push(j);
	}}
	
	function dibujar(){
		var intervalo= window.setInterval(frameLoop,500);
	}
	
	function actualizaBacterias(){
		if(bacteria.estado=="viva"){
		contexto.fillStyle="green";}
		else{fillStyle="black";}
		console.log("dibujando Bacteria");
		contexto.strokeRect(bacteria.x+1,bacteria.y+1,bacteria.width,bacteria.height);
		contexto.fillRect(bacteria.x,bacteria.y,bacteria.width,bacteria.height);	
	}
	
	function frameLoop(){
		//console.log("ejecutando Frameloop");
		actualizaBacterias();
		//dibujarBackterias();
	}
console.log(tablero);	
dibujar();