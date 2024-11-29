// promises are a way of writing asynchronous code
// it's an alternative to writing plain callback functions
// it accepts two functions resolve and reject
// once it's created, its state is pending, which is changed to fulfilled once the promise is resolved, rejected if the promise throws an error
new Promise((resolve, reject) => {
    const generatedValue = Math.random();
    if (generatedValue > 0.5) {
        resolve(generatedValue);
    }
    reject('Value generated is below 0.5');
}).then((result) => 'Promise resolved: ' + result) // returns a promise, that's why it can be chained
.then((result) => console.log('Added to ' + result))
.catch((error) => console.log('Promise rejected: ' + error))
.finally(() => console.log('Promise done'));

// callback pattern for above
function generateRandomNumber(cb) {
    const generatedValue = Math.random();
    if (generatedValue > 0.5) {
        return cb(null, generatedValue);
    }
    cb('Value generated is below 0.5');
}

generateRandomNumber((error, result) => {
    if (error)  {
        return console.log('Promise rejected: ' + error);
    }
    console.log('Promise resolved: ' + result);
});

// promise.all -> fulfills when all are resolved, rejects even if one of them reject
Promise.all([
    Promise.resolve(1), 10, Promise.resolve('rejected')
]).then((result) => console.log(result))
.catch((err) => console.log(err));

// promise.any -> fulfills if any of them resolve, rejects if all of them reject
Promise.any([
    Promise.reject(1), Promise.resolve(15), Promise.reject('rejected')
]).then((result) => console.log(result))
.catch((err) => console.log('Error ' + err));

// promise.race -> fulfills/rejects based on the first promise that's resolved/rejected
// can be used if we want to set a timeout for some operation, e.g. Promise.race([x(10), new Promise((res, rej) => {setTimeout(() => {reject the promise}, timeout)})])
Promise.race([
    Promise.resolve(1), 10, Promise.reject('rejected')
]).then((result) => console.log(result))
.catch((err) => console.log('Error ' + err));