const fs = require("fs")
const moment = require("moment")

let writeFile = fs.createWriteStream("text.txt")
writeFile.setDefaultEncoding("utf-8")
setInterval(()=> {
    let now = moment().format("h:mm:ss")
    writeFile.write(now + "\n")
}, 1000)

