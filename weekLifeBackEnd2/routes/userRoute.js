const express = require('express');
const router = express.Router();
const User = require('../database/models/user')

router.post('/v1/users', async (req, res) => {    
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
            res.status(201).send(user);
        } else {
            res.status(400).send({error:'User already exists'})
        }
    } catch (e) {
        res.status(500).send(e);
    }
})
router.patch('/v1/users', async (req, res) => {
    try {
        const user = await User.findOne({where:{email:req.body.email}})
        await user.update({ dateOfBirth: req.body.dateOfBirth }
        )
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.get('/v1/users', async(req, res)=>{
    try {
        const user = await User.findOne({
            where:{
                email:req.body.email
            }
        })
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(e)
    }
})
module.exports = router;