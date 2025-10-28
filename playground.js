// function test() {
//     let a = b = 10;
// }

// test();
// try {
//     console.log(a);
// } catch (err) {
//     console.log(err.message);
// }
// console.log(b);

const func = function(country, state) {
    console.log(this.name + ' is from ' + state + ', ' + country);
}

const user = { name: 'Mary' };

Function.prototype.myCall = function(context, ...args) {
    context.uniquePropertyBySud = this;
    return context.uniquePropertyBySud(...args);
}

func.myCall(user, 'USA', 'California');