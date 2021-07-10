var express = require('express');
var app = express();
var port = 3000;

app.get('/', (request, response) => {
    response.send('done');
})

app.listen(port, () => {
    console.log('Demo');
})
