// let arr=[1,2,3,4,5]
// console.log(...arr)
// console.log(arr)

class Animal{
    #color

    constructor(naam,awaz,rang="black"){
        this.name=naam
        this.sound=awaz
        this.#color=rang
    }

    tellsound(){
       
        console.log(`${this.name} makes a ${this.sound} sound`)
    }
    getcolor(){
        
    }

}
let dog=new Animal("sheru","woof","brown")
// console.log(dog)

// dog.tellsound()
dog.sound="bark"
console.log(dog)
dog.tellsound()