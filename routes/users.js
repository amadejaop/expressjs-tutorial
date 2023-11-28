// contains all the routes for the user file
const express = require('express');
// create a router
const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
    console.log(req.query.name);
    res.send('user list')
});

router.get('/new', (req, res) => {
    res.render('users/new', {firstName: "test"});
});

router.post('/', (req, res) => {
    const isValid = false;
    if (isValid) {
        users.push({ firstName: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log('error');
        res.render('users/new', { firstName: req.body.firstName });
    }
    
    res.send('hi');
});

router.route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(`get user with ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`update user with ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`delete user with ID ${req.params.id}`);
    });


const users = [{name: 'Kyle'}, {name: 'Sally'}];
// param method will run every time it finds a parameter that marches the name you pass in
// must run next() or it will get stuck in infinite loading on the page
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;