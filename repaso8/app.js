var n = parseInt(prompt("Escribe un número"))
function filas(n){
	for(var i = n; i >=1; i--){ //columna
		for(var a= 1; a <= i; a++){ //fila
			document.write("*");
		}
	document.write("<br>");
	}
}
filas(n);