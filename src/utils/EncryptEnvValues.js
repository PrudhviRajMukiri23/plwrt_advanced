const encryptdecrypt = require('crypto-js')
const path = require('path')
const fs = require('fs')

const srcPath = path.resolve(__dirname, "..")
const originalPath = path.resolve(srcPath, "config")
const pathVal = originalPath+"/.env"

async function encryptEnvFileValue(keyValue) {
    const fileContent = fs.readFileSync(pathVal)

    let values = fileContent.toString().split('\n')

    let encryptedLines = values.map((line)=>{
        let [key, value] = line.split("=")
        if(value) {
            const encryptedValue = encryptdecrypt.AES.encrypt(value, keyValue).toString() 
            return `${key}=${encryptedValue}`
        }
        return line
    })    
    let encryptedData = encryptedLines.join('\n')
    fs.writeFileSync(pathVal, encryptedData, 'utf-8')

    console.log("Encryption completed...")
}

encryptEnvFileValue("keyy")


