// 12  35 99 18 75 
// 冒泡特征：邻居 每移一下就是换位 一次讲一个数换到它该在的位置
// 一个数一次 轮回 （数字的个数）-（以前的位子）
// 排序 从大到小
function bubleSort(arr){
    let temp=null;
    let length = arr.length
    // 每个数都要轮回一次，所以两次轮回，一次拿出每个数，另一个拿出每个数循环
    for( let i=0;i<length-1;i++) {
        for(let l=0;l<length-i-1;l++)
            if(arr[l]>arr[l+1]){
                temp=arr[l];
                arr[l]=arr[l+1];
                arr[l+1]=temp;
        }
  
    }return arr;
}
console.log(bubleSort([1,3,47,2,52,44]))
