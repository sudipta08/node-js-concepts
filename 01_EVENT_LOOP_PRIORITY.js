// In every iteration, event loop comes across six different queues. Each queue holds one or more callback functions which need to be executed on call stack
// after every callback in settimeout, microtaskqueue is checked and then it moves on to other queues
// when only one timer and i/o cb is present, depending on delay result will come - don't remember any more

// example 1 - microtask queue
// Promise.resolve().then(() => console.log('promise resolved'));
// process.nextTick(() => console.log('nextTick executed'));

// example 2 - microtask queue
// loop doesn't come out of microtask queue, until and unless callbacks in both nextTick and promise queues are executed
// once all the callbacks in nextTick queue are done, then event loop moves to promise queue
// once all the callbacks in promise queue are done, then event loop moves to nextTick queue
// eventually, when both the queues are empty, event loop moves to other queues
// process.nextTick(() => console.log('next tick 1'));
// process.nextTick(() => {
//   console.log('next tick 2');
//   process.nextTick(() => console.log('next tick inside 2'));
// });
// process.nextTick(() => console.log('next tick 3'));

// Promise.resolve().then(() => console.log('promise 1 resolved'));
// Promise.resolve().then(() => {
//   console.log('promise 2 resolved');
//   process.nextTick(() => console.log('next tick inside promise'));
// });
// Promise.resolve().then(() => console.log('promise 3 resolved'));

// example 3 - timer queue
// after every callback function is executed in timer queue, microtask queue is checked again
// setTimeout(() => console.log('set timeout 1'));
// setTimeout(() => {
//   console.log('set timeout 2');
//   Promise.resolve().then(() => console.log('promise inside timeout 2'));
//   process.nextTick(() => console.log('tick inside timeout 2'));
// });
// setTimeout(() => console.log('set timeout 3'));

// example 4 - i/o queue
// after every callback in i/o queue, microtask queue is checked (just like timer queue)
// const fs = require('fs');
// fs.readFile(__filename, () => console.log('read file'));
// process.nextTick(() => console.log('next tick'));
// Promise.resolve().then(() => console.log('promise'));

// example 5 - i/o queue
// we have setTimeout and an I/O operation
// the order of execution is not guaranteed
// though in my system the timer always executes first
// reason is that implementation of setTimeout is such that even though we mention the delay is 0, minimum delay will be taken as 1ms
// that means, timer callback will be pushed to the queue after 1ms
// and if the event loop checks timer queue before 1ms and the file has also been read before that, then there is a chance that file callback will be called first
// const fs = require('fs');
// fs.readFile(__filename, () => console.log('file read'));
// setTimeout(() => console.log('run set timeout'), 0);

// example 6 - i/o queue and polling and check queue
// after every callback in check queue, microtask queue is checked (just like timer queue)
// i/o events are polled and call back functions are added into i/o queue, once the i/o operation is finished
const fs = require('fs');
setImmediate(() => console.log('set immediate'));
fs.readFile('./02_PROMISES.js', () => console.log('file read'));

// example 7
// the output for following is not guaranteed
// because setTimeout always has a delay of 1ms
// depending on when event loop checks the timer queue, output will vary
// setTimeout(() => console.log('set timeout'));
// setImmediate(() => console.log('set immediate'));

// const baz = () => console.log('baz');
// const foo = () => console.log('foo');
// const zoo = () => console.log('zoo');
// const start = () => {
//   console.log('start');
//   setImmediate(baz);
//   new Promise((resolve, reject) => {
//     resolve('bar');
//   }).then(resolve => {
//     console.log(resolve);
//     process.nextTick(zoo);
//   });
//   process.nextTick(foo);
// };
// start();

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
// });

// promise.then((res) => {
//     console.log(res);
// });

// console.log(4);