
function merge_sort(arr){
	if(arr.length < 2) return arr;
    var arr_split = split(arr);
    var left = arr_split[0];
    var right = arr_split[1];
    console.log("left, right", left, right);
    return merge(merge_sort(left), merge_sort(right));
}

function split(arr){
	var middle = Math.ceil(arr.length / 2);
	return [arr.slice(0,middle), arr.slice(middle)];
}

function merge(arr1,arr2){
	console.log("arr1,arr2",arr1,arr2);
	var arr_merged = [];
	var i = 0; 
	var j = 0;
	while (i < arr1.length || j < arr2.length) { 
		if(arr1[i] <= arr2[j] || arr2[j] === undefined) { 
			arr_merged.push(arr1[i]);
			i++;
		}
		else {
			arr_merged.push(arr2[j]); 
			j++;
		}
	}
	return arr_merged;
}

// var arr1 = [2,3,5,1,12,0,-1,3,67,45,12,-10];
// var arr2 = [89,7,14,0,-50,58];

// console.log(merge_sort(arr1));
// console.log(merge_sort(arr2));
