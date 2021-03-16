
var rotateright = function(arr, num){
    if(num == 0) { return arr}
    for(i = 0 ; i<arr.length; i++){
        let popelement = arr.pop();
        arr.unshift(popelement);
    }
    return arr;
}

res = rotateright([2,3,4,5,7], 3);

console.log(res);

var binsearch = function(arr, num, start, end){
    if(start>end) return -1
    mid = Math.floor(start+end)/2

    if(arr[mid] === num) return mid;
    else if(num < arr[mid]){
        return binsearch(arr,num, start, mid-1);
    }
    else if(num > arr[mid]){
        return binsearch(arr,num, mid+1, end);
    }
}

result = binsearch([1,2,3,4,5], 5, 0,5);
console.log(result);