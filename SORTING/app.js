
// ! BUBBLE SORTING

function bubblesort(arr){
let n=arr.length
    for(let i=1;i<n;i++){
        for(let j=0;j<n-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]

            }
           
        }
    }
return arr;
}

console.log(bubblesort([14,54,2,33,12,9]))


// ! SELECTION SORT--

function selectionsort(arr){

    let n=arr.length;

    for(let i=0;i<n-1;i++){
        
        let minvalue=i;

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minvalue]){
                minvalue=j;
            }
            
        }

        [arr[minvalue],arr[i]]=[arr[i],arr[minvalue]]
    }
 return arr;
}

console.log(selectionsort([14,54,12,13,13,12,9,45,44,43,42]))

//! INSERTION SORTING

function insertionsort(arr){
   
    let n=arr.length;
   for(let i=1;i<n;i++){

   const temp=arr[i]

let j=i-1;
for(j>=0;j--;){
   if(arr[j]>temp){
       arr[j+1]=arr[j]
   }
   else{
       break;
   }

}
arr[j+1]=temp;


}

return arr;

}

console.log(insertionsort([14,54,12,13,13,12,9,45,44,43,42]))