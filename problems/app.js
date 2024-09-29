function countdigit(n,D){
    let str=String(n);
    let count=0;
    let length=str.length;
    for(let i=0;i<length[i];i++){

        if(str.charAt(i)===D){
            count++
        }
        
        return count
    }
}

let ans=countdigit(111231,1)
console.log(ans)