function bubble_sort(arr){
	for (var j = 0, length = arr.length; j < length; j++){
		var sorted = true;
		for (var i = 0; i < length - 1; i++){
			if (arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				sorted = false;
			}
		}
	if(sorted) break;	
	}
	return arr;
}
// var arr = [2,3,5,1,12,0,-1,3] 
// console.log(bubble_sort(arr));