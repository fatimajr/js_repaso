var n = parseInt(prompt("Escribe un número"))
function numero (limit){
	for(var i=1; i<=limit; i+=2){
		document.write(i + " ");
	}
}
numero(n);