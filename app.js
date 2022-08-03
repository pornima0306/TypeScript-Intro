var cl = console.log;
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('btn');
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
var x = 10;
//x = "ten"  //type string is not assignable to number
var y; // if we only declared the variable but not assign any value it story any type of value
y = 20;
y = true;
y = 'Hello Typescript';
var a; //we can only store number 
a = 30;
// a = true; //we can only store number 
// a = "Hello"  //we can only store number 
/* ===============================================-Boolean================================================ */
var canDrive; // we can only store boolean values true or false
canDrive = true;
canDrive = false;
var canMarray;
canMarray = true;
canMarray = false;
/* ===============================================-Object================================================ */
var person;
// we have same keys having same datatype as we declare ... if we add additional info it throws an error..if we missed some info it also throw an error
person = {
    fname: 'Pornime',
    lname: 'Waghmare',
    age: 25
};
cl(person);
/* ------------------------------------------------------------------------------------------------------------ */
var product;
product = {
    pName: 'Apple',
    pPrice: 80000,
    pCat: 'iPhone',
    pManufacture: new Date(2021, 0)
};
cl(product);
/* ------------------------------------------------------------------------------------------------------------ */
var p2;
p2 = {
    fname: 'Jhon',
    lname: "Doe",
    age: 26,
    hobbies: ['sketching', 'dancing', 'reading'],
    child: {
        fname: "Jery",
        lname: 'Doe',
        age: 4
    }
};
cl(p2);
/* -------------------------------------------------------------------------------------------------------- */
var personInfo = {
    firstName: "Pornima",
    lastName: "Waghmare",
    sayHello: function () { } //Type template 
};
personInfo.sayHello = function () {
    cl("hello " + personInfo.firstName);
};
personInfo.sayHello();
/* ===============================================-Array================================================ */
var skills;
skills = ['HTML5', 'CSS3', 'javascript', 'Angular'];
var pkgs;
pkgs = [1000000, 800000, 500000, 700000, 900000];
var color;
color = ['red', 'yellow', 'blue', 'orange', "green"];
var animals = ['Cat', 'Dog', 'Rabit', 'Monky'];
var android = ['Cupcake', 'Donet', 'Eculear', 'froyo'];
/* ===============================================-Function================================================ */
var add = function (n1, n2, showResult, phrase) {
    if (showResult === true) {
        var result = n1 + n2;
        cl("".concat(phrase, " ").concat(result));
        cl(phrase + n1 + n2); // type coresion happen hear phrase is string n1 and n2 is number then n1 n2 also get converted into string addition not happen
        return;
    }
    else {
        return n1 + n2;
    }
};
btn.addEventListener('click', function () {
    cl(add(+num1.value, +num2.value, false, 'The result is'));
});
add(20, 30, true, 'The result is'); // return the value in console >> if block executed
var getAddition = add(30, 40, false, 'The result is'); //return the value and store it in new veriable getAddition >> else block executed
cl(getAddition);
/* --------------------------------------------------------------------------------------------- */
var age;
age = [20, 17, 12, 14, 23, 25, 30, 31];
var canDriveCar = function (arr) {
    arr.forEach(function (ele) {
        if (ele >= 18) {
            cl("yeeppiiii!!!!! I can drive the car, My age is ".concat(ele));
            return;
        }
    });
};
canDriveCar(age);
/* --------------------------------------------------------------------------------------------- */
function builtName(fname, lname) {
    cl("".concat(fname, " ").concat(lname));
    return;
}
var person1 = builtName('Pornima', 'Waghmare');
var person2 = builtName('Vinayak', 'Waghmare');
var person3 = builtName('Pooja', 'Deshmukh');
var person4 = builtName('Sandhya', 'Kale');
/* --------------------------------------------------------------------------------------------- */
var personName = {
    firstname: "Harry",
    lastname: "Potter"
};
var invokeperson = function (obj) {
    cl("first name :" + obj.firstname);
    cl("last name :" + obj.lastname);
};
invokeperson(personName);
/* --------------------------------------------------------------------------------------------- */
