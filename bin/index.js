"use strict";
// ****************** Types ******************
let x = true;
// The default is going to be number[], you know
// the inferred type. If you want it to be any[]
// then you need to do so explicitly.
let xArr = [1, 2, 3];
// Arrays neeed to be assigned before using.
// Null arrays can't be pushed into.
xArr.push(12);
// Tuples
let xTup;
xTup = [1, '2', true];
// Tuples Array
let xTupArr = [];
xTupArr.push([1, '1']);
xTupArr.push([2, '2']);
// Unions
let xUnion = 10;
// string || number will not work.
// Enums
var xEnum;
(function (xEnum) {
    xEnum[xEnum["GET"] = 0] = "GET";
    xEnum[xEnum["POST"] = 1] = "POST";
    xEnum[xEnum["DELETE"] = 2] = "DELETE";
})(xEnum || (xEnum = {}));
let xEnumV = xEnum.POST;
let xEnumVMatch;
// To compare enums, we need to use .valueOf() function
xEnumVMatch = xEnumV.valueOf() == xEnum.GET;
xEnumVMatch = xEnumV.valueOf() == 0; // This and the upper line is the same thing
var xEnumStringified;
(function (xEnumStringified) {
    xEnumStringified["GET"] = "GET";
    xEnumStringified["POST"] = "POST";
    xEnumStringified["DELETE"] = "DELETE";
})(xEnumStringified || (xEnumStringified = {}));
console.log('x', x);
console.log('xArr', xArr);
console.log('xTup', xTup);
console.log('xTupArr', xTupArr);
console.log('xUnion', xUnion);
console.log('xEnum', xEnum);
console.log('xEnumV', xEnumV);
console.log('xEnumVMatch', xEnumVMatch);
console.log('xEnumStringified', xEnumStringified);
// ****************** Objects ******************
// By default objects are typed.
let foo = {
    a: 0,
    b: 'a',
    c: null,
};
// foo = "a"; // Invalid
// By default everything is non nullable in ts,
// if you want to make something nullable then you
// need to use a null union
let bar1 = {
    a: 1,
    b: 'b',
    c: null,
};
let bar2 = {
    a: 2,
    b: 'c',
    c: null,
};
// When you union something with any, you
// immediately lose all your type information
let bar3 = {
    a: 3,
    b: 'd',
    c: null,
};
console.log('foo', foo);
console.log('bar1', bar1);
console.log('bar2', bar2);
console.log('bar3', bar3);
// ****************** Casted types ******************
let anyNum = '20';
let castedNum = anyNum;
console.log('anyNum', anyNum);
console.log('castedNum', castedNum);
console.log('tyoeof(castedNum)', typeof castedNum);
// ****************** Functions ******************
function addFcn(num1, num2) {
    return num1 + num2;
}
// void type is there in case you won't return anything
function log(str) {
    console.log(str);
}
// if you don't give it a return type then default is void anyways
let addFcnRes = addFcn(1, 2);
let logRes = log('XYZ');
console.log('addRes', addFcnRes);
console.log('addRes', logRes);
let tuser1 = {
    id: '0',
    name: 'Zero',
};
let iuser1 = {
    id: 1,
    name: 'One',
    email: 'one@debug.com',
};
// Function signatures work with arrow functions only tho.
const addSigFcn = (x, y) => {
    return x + y;
};
const subtractSigFcn = (x, y) => {
    return x - y;
};
let addSigFcnRes = addFcn(1, 2);
let subSigFcnRes = subtractSigFcn(1, 2);
console.log('tuser', tuser1);
console.log('iuser', iuser1);
console.log('addRes', addFcnRes);
console.log('subRes', subSigFcnRes);
// ****************** Classes ******************
// This is here because it just looks cleaner.
var EAnimalMotions;
(function (EAnimalMotions) {
    EAnimalMotions["IDLE"] = "Idle";
    EAnimalMotions["SITTING"] = "Sitting";
    EAnimalMotions["WALKING"] = "Walking";
})(EAnimalMotions || (EAnimalMotions = {}));
// Implementing a interface will not respect 2 things tho,
// 1) readonly fields of interface are ignored.
// 2) function signature parameters are ignored as well.
class Animal {
    name;
    legs;
    motion = EAnimalMotions.IDLE;
    // public by default.
    // private means can only be changed via this class.
    // protected means can be changed via this class or extended classes and no futher.
    constructor(props) {
        this.name = props.name;
        this.legs = props.legs;
    }
    sit() {
        this.motion = EAnimalMotions.SITTING;
    }
    walk() {
        this.motion = EAnimalMotions.WALKING;
    }
}
const dog = new Animal({ name: 'Dog', legs: 4 });
const cat = new Animal({ name: 'Cat', legs: 4 });
// Here is how abstraction is achieved
cat.walk(); // works
// cat.motion = EAnimalMotions.WALKING; // doesn't works
console.log('dog', dog);
console.log('cat', cat);
class Dog extends Animal {
    breed;
    constructor(props) {
        super({ name: props.name, legs: props.legs });
        this.breed = props.breed;
    }
}
const husky = new Dog({ name: 'Dog', legs: 4, breed: 'Husky' });
husky.sit();
console.log('husky', husky);
// ****************** Generics ******************
// Generic function
function gLogger(value) {
    console.log(value, 'value');
}
gLogger('10');
// gLogger<string>(10); // not valid
// Generic class
class GLogger {
    value;
    constructor(value) {
        this.value = value;
    }
    log() {
        console.log(this.value);
    }
}
const gLogger1 = new GLogger('10');
// const gLogger1 = new GLogger<string>(10); // not valid
gLogger1.log();
