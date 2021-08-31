import { Student} from './student';

let myNUmber:number;
myNUmber = 5;
myNUmber = 55.65

let myString:string;
myString = 'Test';

let myBoolean: boolean;

myBoolean = false;

let myVariable = "This is me";
// Arrays
let myArray: string[];

myArray = ['Value1', "Value2", "Value3"];

for(const item of myArray){
    console.log(item);
}


// Object
let myObject : {name:string, age:number};

myObject = {name: 'Sara', age: 4};

type person = {name:string, age:number};

type type1 = number | string;

let myValue: person | string;

myValue = "Test";


// Functions

function add(a:number, b:number): number | string{
 
    if(a > 10)
        return a+b;
    else{
        return "Test";
    }
}

console.log(add(10,20));

console.log(add(20,20));


// Generics
function insertAtFirst<T,U>(array: T[], value:U){
    let result: any[];
    result = [value,...array];
    return result;
}

console.log(insertAtFirst([1,2,3], 0))

console.log(insertAtFirst(['A','B','C'], 10))


// Classes


let student = new Student('Max', "Joe", 30);

student.age = 14;


class ITSudent extends Student{ 
    constructor(private  mark:number, firstName:string){
        super(firstName, '', 12);   }
}

let itStudent = new ITSudent(87, "Martin");


console.log(itStudent.getName());


interface Person {
    firstName:string;
    lastName:String;
    getFullName: (value:string) =>{}
}

let person: Person = {
    firstName:' Max',
    lastName : 'Martin',

    getFullName(value:string){
        return value + this.firstName + ' ' + this.lastName;
    }
}

class ComputerSudent implements Person{
    firstName: string;
    lastName: String;
    getFullName(value: string){
        return value + this.firstName + ' ' + this.lastName;
    };
    
}



