const encryptdecrypt = require('crypto-js')

function encryptValue(string) {
    let en = encryptdecrypt.AES.encrypt(string, "key")
    console.log(en.toString())
    return en.toString()
}

function decryptValue(string) {
    let de = encryptdecrypt.AES.decrypt(string, "key")
    console.log(de.toString(encryptdecrypt.enc.Utf8))
}

decryptValue(encryptValue("prudhvi"))