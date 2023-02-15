const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (data) => {
  console.log(`data received succesfully: ${data}`);
});

const sendData = (data) => {
  customEmitter.emit("response", data);
};

let x = 11;
if (x >= 10) {
  sendData("a");
}
