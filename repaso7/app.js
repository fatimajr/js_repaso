var n = parseInt(prompt("Escribe un número"))
function filas(n){
	for(var i = 1; i <=n; i++){
		for(var a = 1; a <= i; a++){
			document.write("*");
		}
	document.write("<br>");
	}
}
filas(n);