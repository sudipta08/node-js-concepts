// In every iteration, event loop comes across six different queues. Each queue holds one or more callback functions which need to be executed on call stack
// after every callback in settimeout, microtaskqueue is checked and then it moves on to other queues
// when only one timer and i/o cb is present, depending on delay result will come - don't remember any more

// i/o polling checks if i/o operation is completed and then pushes the cb in i/o queue
// i/o events are polled and added to i/o queue only after i/o is complete
setImmediate(() => console.log('set immediate'));
const fs = require('fs');
fs.readFile('./02_PROMISES.js', () => console.log('file read'));

const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
});

promise.then((res) => {
    console.log(res);
});

console.log(4);