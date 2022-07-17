// ****************** Types ******************
let x: boolean = true;

// The default is going to be number[], you know
// the inferred type. If you want it to be any[]
// then you need to do so explicitly.
let xArr: number[] = [1, 2, 3];
// Arrays neeed to be assigned before using.
// Null arrays can't be pushed into.
xArr.push(12);

// Tuples
let xTup: [number, string, boolean];
xTup = [1, '2', true];
// Tuples Array
let xTupArr: [number, string][] = [];
xTupArr.push([1, '1']);
xTupArr.push([2, '2']);

// Unions
let xUnion: string | number = 10;
// string || number will not work.

// Enums
enum xEnum {
  GET,
  POST,
  DELETE,
}
let xEnumV = xEnum.POST;
let xEnumVMatch: boolean;
// To compare enums, we need to use .valueOf() function
xEnumVMatch = xEnumV.valueOf() == xEnum.GET;
xEnumVMatch = xEnumV.valueOf() == 0; // This and the upper line is the same thing

enum xEnumStringified {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}

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
let bar1: {
  a: number;
  b: string;
  c: boolean | null;
} = {
  a: 1,
  b: 'b',
  c: null,
};

// Typed object
type Bar = {
  a: number;
  b: string;
  c: boolean | null;
};
let bar2: Bar | null = {
  a: 2,
  b: 'c',
  c: null,
};

// When you union something with any, you
// immediately lose all your type information
let bar3: Bar | any = {
  a: 3,
  b: 'd',
  c: null,
};

console.log('foo', foo);
console.log('bar1', bar1);
console.log('bar2', bar2);
console.log('bar3', bar3);

// ****************** Casted types ******************

let anyNum: any = '20';
let castedNum = anyNum as number;

console.log('anyNum', anyNum);
console.log('castedNum', castedNum);
console.log('tyoeof(castedNum)', typeof castedNum);

// ****************** Functions ******************

function addFcn(num1: number, num2: number): number {
  return num1 + num2;
}

// void type is there in case you won't return anything
function log(str: any): void {
  console.log(str);
}
// if you don't give it a return type then default is void anyways

let addFcnRes = addFcn(1, 2);
let logRes = log('XYZ');
console.log('addRes', addFcnRes);
console.log('addRes', logRes);

// ****************** Custom types ******************

// For custom types we have types and interfaces.
// Only difference is that types work with primitives and unions as well
// While interfaces are for objects only

type TUser = {
  readonly id: TUserID;
  name: string;
  email?: string; // optional
};

type TUserID = string | number; // Types support primitives and unions, interfaces don't

interface IUser {
  readonly id: number;
  name: string;
  email?: string; // optional
}

let tuser1: TUser = {
  id: '0',
  name: 'Zero',
};

let iuser1: IUser = {
  id: 1,
  name: 'One',
  email: 'one@debug.com',
};
// iuser1.id = 10; // Not valid, readonly can only be assigned while initialization.

// Interfaces can also be used to make function signatures
interface FI2Nums {
  (a: number, b: number): number;
}

// Function signatures work with arrow functions only tho.

const addSigFcn: FI2Nums = (x: number, y: number): number => {
  return x + y;
};

const subtractSigFcn: FI2Nums = (x: number, y: number): number => {
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
enum EAnimalMotions {
  IDLE = 'Idle',
  SITTING = 'Sitting',
  WALKING = 'Walking',
}

// We can make abstract classes by using interfaces

interface IAnimalFields {
  name: string;
  legs: number;
}

interface IAnimalMethods {
  sit(): void; // function signature
  walk(): void; // function signature
}

type IAnimal = IAnimalFields & IAnimalMethods;

// Implementing a interface will not respect 2 things tho,
// 1) readonly fields of interface are ignored.
// 2) function signature parameters are ignored as well.
class Animal implements IAnimal {
  name: string;
  legs: number;
  private motion: EAnimalMotions = EAnimalMotions.IDLE;
  // public by default.
  // private means can only be changed via this class.
  // protected means can be changed via this class or extended classes and no futher.

  constructor(props: IAnimalFields) {
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

// Extended classes

type IDogFields = IAnimalFields & { breed: string };
class Dog extends Animal {
  breed: string;

  constructor(props: IDogFields) {
    super({ name: props.name, legs: props.legs });
    this.breed = props.breed;
  }
}

const husky = new Dog({ name: 'Dog', legs: 4, breed: 'Husky' });
husky.sit();

console.log('husky', husky);

// ****************** Generics ******************

// Generic function
function gLogger<T>(value: T) {
  console.log(value, 'value');
}

gLogger<string>('10');
// gLogger<string>(10); // not valid

// Generic class
class GLogger<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  log() {
    console.log(this.value);
  }
}

const gLogger1 = new GLogger<string>('10');
// const gLogger1 = new GLogger<string>(10); // not valid
gLogger1.log();
