function selection_sort(arr){
	for (var i = 0; i <arr.length - 1; i++) {
		var k = i;
		var small = arr[i];
		for (var j = i+1;j <arr.length; j++) {
			if(small > arr[j]) {
				small = arr[j];
				k = j;
			}
		}
		arr[k] = arr[i]
		arr[i] = small;
	}
	return arr;
}

// var arr1 = [2,3,5,1,12,0,-1,3];
// var arr2 = [89,7,14,0,-50,58];

// console.log(selection_sort(arr1));
// console.log(selection_sort(arr2));