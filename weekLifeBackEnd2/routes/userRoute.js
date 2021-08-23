const express = require('express');
const router = express.Router();
const User = require('../database/models/user')
const cors = require('../middleware/cors')


router.post('/user', async (req, res) => {

    console.log("llega o no llega")
    
    try {
        const userEmail = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (userEmail === null) {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const email = req.body.email
            const user = await User.create({ firstName, lastName, email })
            res.send(user);
            console.log('---------------------------------------------------------****')
            console.log(user);
        } else {
            res.send(userEmail)
        }
    } catch (e) {
        res.status(500).send(e);
    }

})
router.patch('/user/datebirth', async (req, res) => {

    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++======')
    try {
        const user = await User.update({ dateOfBirth: req.body.dateOfBirth }, {
            where: {
                email: req.body.email
            }
        })
        res.send(user);
        console.log(user)
    } catch (e) {
        res.status(500).send(e)

    }

})
module.exports = router;