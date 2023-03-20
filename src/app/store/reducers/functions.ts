export function binarySearch(arr:any,target:any){
 let start = 0 
 let end = arr.length - 1

 while(start<=end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid]==target){
        return arr[mid];
    }else if (target>arr[mid]){
        start = mid+1
    } else if(target<arr[mid]){
        end = mid -1
    }
 }
 return false;
 
}