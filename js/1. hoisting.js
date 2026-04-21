// due to hoisting following will not throw error
console.log(b);
var b = 100;

// even though a is defined with var, we cannot access it inside the block, as let a is hoisted to the top of its block
// following will result in error
var a = 10;
{
    console.log(a);
    let a = 20;
}
