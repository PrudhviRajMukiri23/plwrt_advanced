const encryptdecrypt = require('crypto-js')
const path = require('path')
const fs = require('fs')

const srcPath = path.resolve(__dirname, "..")
const originalPath = path.resolve(srcPath, "config")
const pathVal = originalPath+"/.env"

async function decryptEnvFileValue(keyValue) {
    const fileContent = fs.readFileSync(pathVal)

    let values = fileContent.toString().split('\n')

    let decryptedLines = values.map((line)=>{
        let [key, value] = line.split("=")
        if(value) {
            const decryptedValue = encryptdecrypt.AES.decrypt(value, keyValue).toString(encryptdecrypt.enc.Utf8)
            return `${key}=${decryptedValue}`
        }
        return line
    })    
    let decryptedData = decryptedLines.join('\n')
    fs.writeFileSync(pathVal, decryptedData, 'utf-8')

    console.log("Decryption completed...")
}

decryptEnvFileValue("key")


