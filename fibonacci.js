'use strict'
function fibonacci(n){
	var f = 0;
	var g = 1;
	for (var i = 0; i <= n; i++) {
		console.log(f);
		f = f+g;
		g = f-g;
	}
}

fibonacci(15);