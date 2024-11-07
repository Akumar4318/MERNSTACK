function fibonacci(n,str){
    // if(n==1){
    //     return 1;
    // }
    // if(n==0){
    //     return 0;
    // }
    if(n<=1)
    {
        return n;
    }
    let ans=fibonacci(n-1)+fibonacci(n-2);
    return ans;
   
}

console.log(fibonacci(7)," ");


