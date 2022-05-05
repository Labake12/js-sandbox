//Evaluate these:
//#1
[2] === [2] False
{} === {} False 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4; //4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal {
    constructor(name, type, color) {
        console.log('Animal', this);
        this.name = name;
        this.type = type;
        this.color = color;
    }
    cow() {
        console.log('Hi I am a, ${this.name}, I am a ${this.type}, and my color is ${this.color}');
    }
   }
class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
        console.log('Mamal', this)
    }
    cowSound() {
        console.log('MOOOOOO, ${this.name}, ${this.type}, ${this.color}');
    }
}
const mamal1 = new Mamal('cow', 'red bororo', 'white');
