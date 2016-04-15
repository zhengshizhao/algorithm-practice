function insertion_sort(arr){
	for(var i = 1, length = arr.length; i < arr.length; i++){
	    var j = i - 1;
		var k = arr[i];
		while(k < arr[j] && j >= 0){
			arr[j+1] = arr[j];
			arr[j] = k;
			j--;
		}
	}
	return arr;
}

// var arr1 = [2,3,5,1,12,0,-1,3];
// var arr2 = [89,7,14,0,-50,58];

// console.log(insertion_sort(arr1));
// console.log(insertion_sort(arr2));