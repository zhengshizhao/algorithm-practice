//write a code fragment that puts the binary representation of a positive integer N into a string S 
function toBinaryString(n){
	var s = "";
	while (n > 0){
		s = n % 2 + s ;
		n = Math.floor(n / 2);
	}
	return s;
}

toBinaryString(256);