

function counter(){
    var count=0
    return {
        inc : ()=>{
            count++;
        },
        dec :()=>{
            count--;
        },
        get:()=>{
            console.log(count)
        }
    }
}

let Counterobj=counter();
console.log(Counterobj);
