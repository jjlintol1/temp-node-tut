const os = require('os');
// Operating system

// info about current user
const user = os.userInfo();
console.log(user);

// uptime of system (in seconds)
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);