function debounce(cb) {
    let timer;
    return function() { // can also accept ...args
        clearTimeout(timer);
        timer = setTimeout(() => cb(), 2000); // we can also do, cb.apply(this, args)
    }
}

function loadSuggestions() {
    console.log('load');
 }

// call the debounce function on script load, so that it returns a function
// and this returned function will be called every time user enters something in the search
const process = debounce(loadSuggestions);
