// load the http library, which is JavaScript that someone else already wrote.
var http = require('http');
var mod = require('./myModule');

http.createServer(function(request, response) {
    // 200 is an HTTP response code, meaning Success!
    // Content-type: text/plain  is a header telling the browser that we're
    //   returning plain text (not, for example, HTML or CSS or an image).
    response.writeHead(200, { "Content-type": "text/plain" });
    // Send the characters "Hello, World" back to the browser.
    response.write(mod.randomize());
    // Tell the browser that we're done. We're not going to send back anything else
    response.end();
}).listen(8888); // 8888 is the port number
