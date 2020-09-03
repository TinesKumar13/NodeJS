const http = require('http');
const fs = require('fs');
const path = require('path');


//Create a server

const server = http.createServer((req,res) => {

if(req.url === '/'){
    
    
    fs.readFile(path.join(__dirname,'index.html'),(err,data) => {

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data)
        res.end()

    })

}

if(req.url === '/user'){

    res.write("Welcome to the homepage")
    res.end()
}


});

server.listen(3000, () => console.log('Server is up and running'))