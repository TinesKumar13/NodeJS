const url = require('url')

const address = "https://www.instagram.com/?hl=ms"

const parsedUrl = url.parse(address,true)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)