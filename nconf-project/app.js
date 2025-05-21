// nconf is used for loading environment variables into the code, based on the environment we are in
const nconf = require('nconf');

// configure nconf
nconf.env(); // it will load the env variables from process.env (which will be created from yaml files)
nconf.file('env', { file: `${__dirname}/node-env.json` }); // it will load the variables from external file and and will override the ones present copied from process.env

console.log(nconf.get('NODE_ENV'));