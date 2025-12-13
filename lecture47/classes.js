class Human{
    // properties or state
    age = 13;
    #wt = 50;  // private property
    ht = 182;

    // behaviour or functionality
    walk(){
        console.log("Human is walking");
    }
    #run(){
        console.log("Human is running");
    }
    get getWeight(){
        return this.#wt;
    }
    set setWeight(n){
        this.#wt = n;
    }

    constructor(newAge = 0, newHt = 0, newWt){
        this.age = newAge;
        this.ht = newHt;
        this.#wt = newWt;
    }
}

let obj = new Human();
console.log(obj.age);
obj.walk();
// obj.run(); // error: private method
// console.log(obj.#wt); // error: private property

obj.setWeight = 60;
console.log(obj.getWeight);
// getter/setter are defined as accessor properties, 
// not as normal methods, so you must use them 
// like properties (without () for the getter, 
// and with = for the setter).

// if written without get/set keywords
// then they will be normal methods
// obj.setWeight(60);
// console.log(obj.getWeight());

// let obj2 = new Human(20, 180, 80);
let obj2 = new Human();
console.log(obj2.age);
console.log(obj2.ht);
console.log(obj2.getWeight);