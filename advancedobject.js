//Evaluate these:
//#1
[2] === [2] False
{} === {} False 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

object1 === object2
true
object1 === { a: 5 };
false
object2 === object1
true
object3 === object2;
true
object4 === object1;
false
object1 === object3;
true
object4 === { a: 5 }
false


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal {
    constructor(name, type, color) {
        console.log('Animal', this);
        this.name = name;
        this.type = type;
        this.color = color;
    }
    introduce() {
        console.log('Hi I am a, ${this.name}, I am a ${this.type}, and my color is ${this.color}');
    }
   }
class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
        console.log('Mamal', this)
    }
    play() {
        console.log('MOOOOOO, ${this.name}, ${this.type}, ${this.color}');
    }
}
const mamal1 = new Mamal('cow', 'red bororo', 'white');