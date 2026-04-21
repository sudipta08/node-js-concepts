// // OUTPUT1
// function func1(){
// 	setTimeout(()=>{
// 		console.log(x);
// 		console.log(y);
// 	},3000);

// 	var x = 2;
// 	let y = 12;
// }
// func1();
// // This will print 2 and 12. Since setTimeout will run after the whole function code finishes, so it will have access to x and y.

// // OUTPUT2
// function func2(){
// 	for(var i = 0; i < 3; i++){
// 		setTimeout(() => console.log(i),2000);
// 	}
// }
// func2();
// //This will print 3, three times, because each setTimeout will be executed after the entire for loop is run. Since var is function scoped, so the value at the end will be 3.

// // Approach 1:
// // However, if we use let here, which is block scoped, the value of i will persist for each iteration.

// // Approach 2: Using IIFE
// function func2(){
//     for(var i = 0; i < 3; i++){ // it won't matter if i am using let or var
//         (function (i) {
//             setTimeout(()=> console.log(i),2000);
//         })(i);
//     }
// }

// // Approach 3: Using a separate function
// function func3(i) {
//     setTimeout(()=> console.log(i),2000);
// }
// function func2(){
//     for(var i = 0; i < 3; i++){ // it won't matter if i am using let or var
//         func3(i);
//     }
// }

// // OUTPUT3
// let x = {}, y = {name:"Ronny"}, z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);
// // x[y] = x['[object Object]'], same as x[z]
// // Output will be {name: 'Akki'}

// // OUTPUT4
// console.log("1" + 1); // 11 -> always concatenate if one of the operands is string
// console.log("A" - 1); // NaN
// console.log(2 + "-2" + "2"); // 2-22
// console.log("Hello" - "World" + 78); // NaN
// console.log("Hello"+ "78"); // Hello78

// // OUTPUT5
// function test() {
//     let a = b = 10; // b will become a global variable in non-strict mode, in strict mode it will throw error
// }

// test();
// try {
//     console.log(a);
// } catch (err) {
//     console.log(err.message);
// }
// console.log(b);

// OUTPUT6 - add a method on prototype of function
const func = function(country, state) {
    console.log(this.name + ' is from ' + state + ', ' + country);
}

const user = { name: 'Mary' };

Function.prototype.myCall = function(context, ...args) {
    context.uniquePropertyBySud = this;
    return context.uniquePropertyBySud(...args);
}

func.myCall(user, 'USA', 'California');