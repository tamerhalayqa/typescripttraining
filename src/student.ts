export class Student{
    // private firstName:string;
    //private lastName:string;
   // age:number;

    constructor(private firstName:string, private lastName:string, public age:number){

    }

    get FirstName(){
        return this.firstName;
    }

    set FirstName(value:string){
        this.firstName = value;
    }
    getName(){
        return this.firstName + ' ' + this.lastName;
    }
}