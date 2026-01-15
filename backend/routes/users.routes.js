const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const user_founded = users.find(user => user.id == req.params.id);
    if(!user_founded){
        res.json({ "sucess": false, "message": "User not found"});
    } else {
        res.json(user_founded);
    }
    });

module.exports = router;