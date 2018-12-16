const fs = require("fs");
const filename = "todo.txt";
console.log("Entire content of todo.txt will be read synchronously.");
let content = fs.readFileSync(filename, {encoding: "utf8"});
console.log("Reading todo.txt finished successfully. ");
console.log("Meanwhile Node.s app couldn't do anything else");
console.log("\nContent of todo.txt");
console.log(content);