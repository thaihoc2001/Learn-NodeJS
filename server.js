var express = require('express');
var userRoute = require('./routes/userapi')

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './view');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('index');
})
app.use('/users', userRoute)

app.listen(port, () => {
    console.log('Server run port ' + port);
})

