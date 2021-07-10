var express = require('express');
var app = express();

var port = 3000;
var users = [
        {id: 1, name: "Hoc"},
        {id: 2, name: "Thai"},
        {id: 3, name: "Hung"}
    ];


app.set('view engine', 'pug');
app.set('views', './view');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/users', (req,res) => {
    res.render('users/users', {
        users: users
    });
})

app.get('/users/search', (req, res) => {
    const q = req.query.q;
    const matchesUser = users.filter(item => {
        return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/users', {users: matchesUser})
})

app.listen(port, () => {
    console.log('Demo');
})
