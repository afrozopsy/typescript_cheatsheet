// ****************** Types ******************
// let x: boolean = true;

// // The default is going to be number[], you know
// // the inferred type. If you want it to be any[]
// // then you need to do so explicitly.
// let xArr: number[] = [1, 2, 3];
// // Arrays neeed to be assigned before using.
// // Null arrays can't be pushed into.
// xArr.push(12);

// // Tuples
// let xTup: [number, string, boolean];
// xTup = [1, '2', true];
// // Tuples Array
// let xTupArr: [number, string][] = [];
// xTupArr.push([1, '1']);
// xTupArr.push([2, '2']);

// // Unions
// let xUnion: string | number = 10;
// // string || number will not work.

// // Enums
// enum xEnum {
//   GET,
//   POST,
//   DELETE,
// }
// let xEnumV = xEnum.POST;
// let xEnumVMatch: boolean;
// // To compare enums, we need to use .valueOf() function
// xEnumVMatch = xEnumV.valueOf() == xEnum.GET;
// xEnumVMatch = xEnumV.valueOf() == 0; // This and the upper line is the same thing

// enum xEnumStringified {
//   GET = 'GET',
//   POST = 'POST',
//   DELETE = 'DELETE',
// }

// console.log('x', x);
// console.log('xArr', xArr);
// console.log('xTup', xTup);
// console.log('xTupArr', xTupArr);
// console.log('xUnion', xUnion);
// console.log('xEnum', xEnum);
// console.log('xEnumV', xEnumV);
// console.log('xEnumVMatch', xEnumVMatch);
// console.log('xEnumStringified', xEnumStringified);

// ****************** Objects ******************
// By default objects are typed.
// let foo = {
//   a: 0,
//   b: 'a',
//   c: null,
// };
// // foo = "a"; // Invalid

// // By default everything is non nullable in ts,
// // if you want to make something nullable then you
// // need to use a null union
// let bar1: {
//   a: number;
//   b: string;
//   c: boolean | null;
// } = {
//   a: 1,
//   b: 'b',
//   c: null,
// };

// // Typed object
// type Bar = {
//   a: number;
//   b: string;
//   c: boolean | null;
// };
// let bar2: Bar | null = {
//   a: 2,
//   b: 'c',
//   c: null,
// };

// // When you union something with any, you
// // immediately lose all your type information
// let bar3: Bar | any = {
//   a: 3,
//   b: 'd',
//   c: null,
// };

// console.log('foo', foo);
// console.log('bar1', bar1);
// console.log('bar2', bar2);
// console.log('bar3', bar3);

// ****************** Casted types ******************

// let anyNum: any = '20x';
// let castedNum = anyNum as number;

// console.log('anyNum', anyNum);
// console.log('castedNum', castedNum);
// console.log('tyoeof(castedNum)', typeof castedNum);

// ****************** Functions ******************

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// // void type is there in case you won't return anything
// function log(str: any): void {
//   console.log(str);
// }
// // if you don't give it a return type then default is void anyways

// let addRes = add(1, 2);
// let logRes = log('XYZ');
// console.log('addRes', addRes);
// console.log('addRes', logRes);

// ****************** Custom types ******************
