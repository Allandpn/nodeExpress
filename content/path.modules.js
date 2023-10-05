const path = require("path")

console.log(__dirname)

console.log(path.sep);

console.log(path.basename(__dirname));

console.log(path.dirname(__dirname))

console.log(path.join(__dirname, "content"))

console.log(path.resolve("content"))

console.log(path.parse(__dirname))
