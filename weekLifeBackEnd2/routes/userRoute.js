const express = require('express');
const router = express.Router();
const User = require('../database/models/user')
router.post('/user', async (req, res) => {    
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
            console.log(user);
        } else {
            res.send(userEmail)
        }
    } catch (e) {
        console.log(Error)
        res.status(500).send(e);
    }
})
router.patch('/user/datebirth', async (req, res) => {
    try {
        const user = await User.findOne({where:{email:req.body.email}})
        await user.update({ dateOfBirth: req.body.dateOfBirth }
        )
        res.send(user)
        console.log(user)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.get('/user/datebirth', async(req, res)=>{
    try {
        const user = await User.findOne({
            attributes:['dateOfBirth', 'firstName'],
            where:{
                email:req.body.email
            }
        })
        res.send(user)
        console.log(user)
    } catch (error) {
        res.status(500).send(e)
    }
})
module.exports = router;