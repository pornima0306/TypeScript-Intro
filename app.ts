let cl = console.log;

let num1 = document.getElementById('num1')! as HTMLInputElement;
let num2 = <HTMLInputElement>document.getElementById('num2')!;
let btn = document.getElementById('btn')!;

/* const add =(n1:number,n2:number) =>{
    return n1+n2
}


btn.addEventListener('click', ()=>{
    cl(add(+num1.value, +num2.value))
}) */

/* const add = () =>{
    let n1 = +num1.value;
    let n2 = +num2.value;
     cl(n1 + n2)
    
}

btn.addEventListener('click', add) */

let x = 10;

//x = "ten"  //type string is not assignable to number

let y;    // if we only declared the variable but not assign any value it story any type of value
y = 20;
y = true;
y = 'Hello Typescript'

let a:number;  //we can only store number 

a = 30;
// a = true; //we can only store number 
// a = "Hello"  //we can only store number 

/* ===============================================-Boolean================================================ */

let canDrive : boolean;  // we can only store boolean values true or false
canDrive= true;
canDrive = false;

let canMarray : boolean;
canMarray =true;
canMarray =false;

/* ===============================================-Object================================================ */

let person :{
   fname  : string,
   lname : string,
   age : number
}

// we have same keys having same datatype as we declare ... if we add additional info it throws an error..if we missed some info it also throw an error
person ={
    fname : 'Pornime',
    lname : 'Waghmare',
    age : 25,
    //email : 'pornima@gmail.com'
}
cl(person)

/* ------------------------------------------------------------------------------------------------------------ */
let product :{
    pName : string,
    pPrice : number,
    pCat : string,
    pManufacture : Date,
}

product ={
    pName : 'Apple',
    pPrice : 80000,
    pCat : 'iPhone',
    pManufacture : new Date(2021 , 0),
}
cl(product)

/* ------------------------------------------------------------------------------------------------------------ */

let p2 :{
    fname : string,
    lname : string,
    age : number,
    hobbies : string[]
    child:{
        fname : string,
        lname : string,
        age : number,
        
    }
}

 p2 ={
    fname : 'Jhon',
    lname : "Doe",
    age : 26,
    hobbies : ['sketching', 'dancing', 'reading'],
    child:{
        fname : "Jery",
        lname : 'Doe',
        age : 4
    }
}
cl(p2)
/* -------------------------------------------------------------------------------------------------------- */

const personInfo = {
    firstName:"Pornima", 
    lastName:"Waghmare", 
    sayHello:function() {  }  //Type template 
 } 
 personInfo.sayHello = function() {  
    cl("hello "+ personInfo.firstName)
 }  
 personInfo.sayHello()

/* ===============================================-Array================================================ */

let skills : string[];
skills =['HTML5', 'CSS3', 'javascript', 'Angular'];

let pkgs : number[];
pkgs = [1000000, 800000, 500000, 700000, 900000];

let color : string[];
color = ['red', 'yellow', 'blue', 'orange', "green"];

let animals : string[]=['Cat', 'Dog', 'Rabit', 'Monky'];

let android : string[]=['Cupcake', 'Donet', 'Eculear', 'froyo'];


/* ===============================================-Function================================================ */

const add =(n1:number,n2:number, showResult: boolean, phrase : string) =>{
    if(showResult === true){
        let result = n1+n2;
        cl (`${phrase} ${result}`);
        cl(phrase + n1 + n2) // type coresion happen hear phrase is string n1 and n2 is number then n1 n2 also get converted into string addition not happen
        return;
    }else{
        return n1 + n2;
    }
    
}
btn.addEventListener('click', ()=>{
    cl(add(+num1.value, +num2.value,false, 'The result is'))
})

add(20,30, true, 'The result is'); // return the value in console >> if block executed

let getAddition = add(30,40, false,'The result is');  //return the value and store it in new veriable getAddition >> else block executed
cl(getAddition)


/* --------------------------------------------------------------------------------------------- */

let age : number[];
age =[20,17,12,14,23,25,30,31];

const canDriveCar = (arr) =>{
    arr.forEach(ele=>{
        if(ele>=18){
            cl(`yeeppiiii!!!!! I can drive the car, My age is ${ele}`)
            return;
        }
    })
}

canDriveCar (age);

/* --------------------------------------------------------------------------------------------- */

function builtName (fname : string, lname:string){
    cl(`${fname} ${lname}`)
    return;
}

let person1 = builtName('Pornima', 'Waghmare');
let person2 = builtName('Vinayak', 'Waghmare');
let person3 = builtName('Pooja', 'Deshmukh');
let person4 = builtName('Sandhya', 'Kale');

/* --------------------------------------------------------------------------------------------- */
const personName = { 
    firstname:"Harry", 
    lastname:"Potter" 
 }; 
 const invokeperson = function(obj: { firstname:string, lastname :string }) { 
    cl("first name :"+obj.firstname) 
    cl("last name :"+obj.lastname) 
 } 
 invokeperson(personName)

/* --------------------------------------------------------------------------------------------- */
