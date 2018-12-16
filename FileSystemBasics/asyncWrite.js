const fs = require("fs");
const filepath = "C:/Users/it170180/OneDrive - HTBLA Leonding/SYT/Huemer/FileSystemBasics/todo/";
const filename = "todo2.txt";
let content = "- Java üben\n";
content += "- Node.js üben\n";
content += "- Gemüse einkaufen";

fs.writeFile(filepath+filename, content, (err) => {
    if (err){
        console.error(err.message);
    } else {
        console.log("File "+filepath+filename+" has been saved!");
    }
});
