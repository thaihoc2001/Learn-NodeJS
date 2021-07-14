var db = require('../db')
var shortid = require('shortid')

module.exports.index = (req,res) => {
    res.render('users/users', {
        users: db.get('users').value()
    });
}

module.exports.create = (req, res) => {
    res.render('users/create')
}

module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
}

module.exports.search = (req, res) => {
    const q = req.query.q;
    const matchesUser = db.get('users').value().filter(item => {
        return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/users', {users: matchesUser})
}

module.exports.getByID = (req, res) => {
    const id = req.params.id
    const user = db.get("users").find({id : id}).value();
    res.render('users/users-detail', {
        user: user
    })
}
