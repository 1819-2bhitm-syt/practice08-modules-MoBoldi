const fs = require("fs");
const filename = "todo.txt";

console.log("Entire content of todo.txt will be read synchronously.");
console.log("Reading todo.txt finished successfully. ");
console.log("Meanwhile Node.s app couldn't do anything else.");

fs.readFile(filename, {encoding: "utf8"}, (err, data) => {
    if (err != null) {
        console.error(err.message);
    } else {
        console.log(`\nContent of ${filename}: \n`+data);
    }
});

