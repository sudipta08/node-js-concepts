JS is a dynamically typed language, which means the type of a variable is checked at run-time as opposed to TS where it's checked at the time of compilation.

Everything else in JS is an object. An object means something which has its own set of properties and things which it can do i.e. methods/functions. For example, array has properties like length, methods like sort, map, slice, reduce etc. Infact, we can also do 'sud'.length because internally JS converts it into String object which has its own set of properties.

1. Primitive data types -> in-built data types provided by JS, like, number, boolean, string, bigint, undefined, null -> these can hold only one value at once
2. Derived data types -> ones which are used to store more complex values, like, objects

typeof
------
	typeof operator is used to get the type of data
	typeof 'sud' -> string
	typeof 1 -> number
	typeof NaN -> number
	typeof true -> boolean
	typeof undefined -> undefined
	typeof null -> object
	typeof [] -> object
	typeof function/class -> function

Hoisting
--------
	1. JS interpreter moves the declaration of variables, functions, classes and imports to the top of their scope, before executing the code.
	2. Variables decalred with var are hoisted to the top of their scope and initialised with a value of undefined. So, they are accessible before their declaration.
	3. Variables declared with const and let are also hoisted, but they are not initialised. So, they cannot be accessed before they are declared, thereby throwing ReferenceError. Classes also behave the same way.
	4. Temporal Dead Zone is the period between entering the scope of a function or a block of code and declaring let or const variables. If these variables are accessed before they are declared, they result in ReferenceError.

Lexical Scoping
---------------
	1. It's the term used to define how the variables are scoped (accessible) in JS based on where they are declared and not where they are used.
	2. Global scope means a variable is accessible throughout the code.
	3. Function scope means a variable is accessible only inside a function. var is function scoped.
	4. Block scope means a variable is accessible inside a block designated by curly braces. let and const are block scoped.
	5. If declared outside a function, var has global scope but const and let don't. That's why we can do window.<var_variable>.

Coercion
--------
	when a value is automatically converted from one data type to another. For example, in 3 + '5', 3 is converted into a string to produce output 35. Also, in conditional statements, a condition is evaluated into a boolean value.

NULLISH COALESCING
------------------
	?? is an operator, which evaluates its left side operand and if it is null or undefined, returns the right side operand. Otherwise, it returns the left side operand.

PASS BY VALUE AND REFERENCE
---------------------------
	all primitive types are passed by value whereas objects and arrays are passed by reference.
	var x = 10; -> space is allocated in memory for holding value 10 and x points to this memory location
	var y = x; -> another space is allocated in memory for holding value 10 and y points to this location
	var m = {} -> space is allocated in memory for holding an empty object
	var n = m; -> n still points to the location that m points to

REST PARAMETERS
---------------
	identified by ..., allow a function to accept any number of arguments and converts it into an array.

HIGHER ORDER FUNCTIONS
----------------------
	which accept function as arguments or return them.

CALL, APPLY AND BIND
--------------------
	1. call(this, any extra arguments separated by comma) is used to call a method by passing the parent object as an argument. In other words, an object can call a method belonging to another object.
	2. apply(this, any extra arguments in an array) is used to call a method by passing the parent object as an argument.
	3. bind - is used for setting the context of this keyword and behaves similar to call, but returns a function which can be invoked later. 
	const funcs = {
		func1: function(country) {
			return this.name + ', ' + country;
		}
	}

	const user = {name: 'sudipta'};

	funcs.func1.call(user, 'India');
	funcs.func1.apply(user, ['India']);
	const boundfunction = funcs.func1.bind(user, 'India');
	boundfunction();

THIS
----
	this is a keyword in JS, which refers to an object. Depending on the scope/context, it has different values.
	1. const a = {
		name: 'sudipta',
		getName: function() {
			return this.name;
		}
	} -> Here, this refers to the parent object and this.name will return 'sudipta'
	2. const b = {
		name: 'sudipta',
		getName: () => {
			return this;
		}
	} -> Here, this refers to the global object, which will be window object in browser and global in node. Same goes for IIFE
	3. IMPORTANT: If we use an arrow function inside a class, then this refers to the class instance.

GLOBAL
------
	is an object which has all the built-in functions and variables that node provides throughout the application, e.g., process, console etc. So, we don't have to import these before using.

CALLBACK FUNCTIONS
------------------
	are passed as an argument to another function and generally they are called when a specific task has completed.

CURRYING
--------
	is a technique of transforming a function which takes multiple arguments into a series of functions which takes one argument at a time.
	function add(a,b) {
		return a + b;
	}
	function add(a) {
		return function(b) {
			return a + b;
		}
	} -> one advantage of doing this is that we keep some of the arguments same and change the rest.
	For example,
	x = add(10);
	y = x(39);
	z = x(90);

CLOSURE
-------
	is the capability of a function to access variables and functions from its outer scope (even after the outer function has executed).
	function func1() {
		let counter = 0;
		function incrementCounter() {
			counter++;
		}
		function getCounter() {
			return counter;
		}
		return {incrementCounter, getCounter};
	}
	const result = func1();
	result.incrementCounter();
	result.getCounter();

MEMOIZATION
-----------
	is the technique of caching results of a function based on input parameters.
	function getResult() {
		const cache = {};
		return function(num) {
			if (cache[num]) console.log('from cache');
			cache[num] = num * num;
			return cache[num];
		}
	}

DEBOUNCE
--------
	is a technique of limiting the rate at which a function is executed. The program waits for a period of inactivity before executing the function. For example, resizing a window/typing in a text field. This is done for improving performance specially in situations where the events are triggered frequently.

PROTOTYPES
----------
	1. Every object in JS has a prototype property, which holds all the associated methods and properties provided by JS. For example, array is an object and we can use functions like filter/sort on top of an array but we never define them, so how are we able to use them. That's because Array has a prototype property which has all the methods like filter/sort attached, and in fact properties like length as well. So we don't have to define them again and again, we just borrow them from the prototype property.
	2. Prototypes allow us to use memory efficiently. As the methods are available on the prototype property, so any new instance/object does not need a copy of this method.
	3. Any changes made in the prototype will be applicable for all the objects.

CLASSES
-------
	1. Classes are templates used for creating objects with similar properties and methods. They are similar to functions and use prototypes under the hood.
	2. new keyword is used to create a new instance of a class, which is basically an object.
	3. constructor function is called first, which initialises the properties of this new object.

ENCAPSULATION
-------------
	Encapsulation is a way of bundling/grouping the data and their associated methods/functions in one unit. It can be acheived with objects, functions and classes.
	1. Since all the code related to a feature/component is in one place, code becomes more manageable.
	2. External code interacts with the object only through its available methods, so we can ensure that data is not modified inappopriately, thereby giving more control.

INHERITANCE
-----------
	Inheritance is a way using which one class inherits the properties and methods of another one and build some additional functionalities on top of that.

	class User { // parent class
		constructor (name) {
			this.name = name;
		}
		login() {
			console.log('logged in');
		}
	}
	class Admin extends User { // child class
		constructor(name, role) {
			super(name);
			this.role = role;
		}
		deleteUser() {
			console.log('deleted user');
		}
	}

	1. If there is no constructor in the child class, the one from parent class will be invoked.
	2. If we want to add some additional properties to the constructor we need to call super() in the constructor of child class.
	3. Properties and methods of child class will override the ones from parent class.

PROTOTYPAL INHERITANCE
----------------------
	is a way by which objects inherit the properties and methods of other objects via prototypes.
	Before ES6, this was achieved with functions. class is just a syntactic sugar
	function User(name) {
		this.name = name;
		this.login = function() { // we can do this but not preferred, prototype inheritance can't be done
			console.log('logged in');
		}
	}
	// instead the functions should be attached on prototype, and classes do that under the hood
	User.prototype.login = function() {
		console.log('logged in');
	}

	const user1 = new User('sudipta');

	function Admin(...args) {
		User.apply(this, args); // this will inherit all the properties of User function, except the prototype object
	}

	Admin.prototype = Object.create(User.prototype); // inherit all the functions on prototype of User

	Admin.prototype.deleteUser = function() {
		console.log('deleted user');
	}

	const adminUser = new Admin('rikita');

WAYS TO CREATE OBJECTS
----------------------
	1. Using curly braces: {a: 1, b: 2}
	2. Using new Object: var x = new Object(); x.a = 1; x.b = 2;
	3. Using function and creating a new object off it:
		a. function Person(name, age) {
			this.name = name;
			this.age = age;
		}
		b. var x = new Person('sudipta', 33);
	4. Using Object.create - it will create a new object from an existing one but as a prototype
		const x = {
			name: 'sudipta',
			print: function() {
				console.log(this.name, this.country);
			}
		}
		const y = Object.create(x);
		Now y will be an empty object with name and print available in its prototype
		y.print() will yield sudipta undefined, as country is not defined.
	5. Using Object.assign: var x = Object.assign({}, {a: 1, b: 2}) - It will copy everything from second argument to first one.

setTimeout
----------
	setTimeout(function(){}, 0) - It executes a callback function after waiting for a specified amount of time in ms. It is not executed immediately, rather it's added to a queue. Once the entire code block is run, this function gets picked up from the queue by the event loop and then executed.

IMPORTING JS IN HTML
--------------------
	- we can write inline javascript in script tag
	- we can import external files in script tag using src attribute. For example, <script src="./test.js"></script>
	- in mordern applications, we can also mention type attribute as "module" in script tag. This will allow javascript file to be treated as a module and we can use import and export statements in that file.
	- if we do [[export default 'xyz']], we don't need to specify any variable name. And while importing, we can say, [[import anyVarName from './test.js']]. Now, anyVarName will have value 'xyz'. Note that a file can have only one default value.