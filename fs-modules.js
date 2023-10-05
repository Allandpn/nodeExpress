
const {readFile, readFileSync, writeFileSync, writeFile} = require("fs")

const first = readFileSync("./content/text1.txt", "utf-8")
const second = readFileSync("./content/text2.txt", "utf-8")

//writeFileSync("./content/new-text.txt", `Here is the result ${first}, ${second}`, {flag:'a'})

console.log(1)
readFile("./content/text1.txt", "utf8", (err, res)=> {
    console.log(1.1)
    if (err) {
        console.log(err)
        return
    } 
        const first = res
        console.log(2)
        readFile("./content/text2.txt", "utf8", (err, res)=> {
            console.log(2.1)
            if (err) {
                console.log(err)
                return
            } 
                const second = res    
                console.log(3)
                writeFile("./content/new-file2.txt", first + second , (err, result) => {
                    console.log(3.1)
                    if(err) {
                        console.log(err)
                        return
                    } else {
                        return
                    }
                }) 
                console.log(3.2)
            
})
console.log(2.2)
    
})

console.log(4)
