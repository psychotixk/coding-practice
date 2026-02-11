
const EventEmitter = require("events");

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} and welcome to events in nodejs`);
})


eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} and nodejs is here`);
})



// 
eventEmitter.once('pushnotify',()=> {
    console.log("This event will run only once");
})

// Emit the event
// eventEmitter.emit('greet', "suman");
// eventEmitter.emit('greet', "chai");
// eventEmitter.emit('pushnotify');
// eventEmitter.emit('pushnotify');

// const myListener = () => console.log("I am a test listener");
// eventEmitter.on('test', myListener);
// eventEmitter.emit('test');
// eventEmitter.emit('test');
// eventEmitter.removeListener('test', myListener);
// eventEmitter.emit('test');

// console.log(eventEmitter.listeners('greet'));