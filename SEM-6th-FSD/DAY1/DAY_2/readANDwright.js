import fs from 'fs'

const writeFileSync = (path, data) => {
    try {
        fs.writeFileSync(path, data);
        console.log("data written successfully");
    } catch (error) {
        console.log(error);
    }
}

writeFileSync("./e.txt", "Hello from writeFileSync!");

const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        console.log("File content:");
        console.log(data);
    } catch (error) {
        console.log("Error reading file:", error);
    }   
}

readFileSync("./e.txt");

export {writeFileSync, readFileSync};                                               