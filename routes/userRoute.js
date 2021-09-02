const express = require('express');
const router = express.Router();
const User = require('../database/models/user')

router.post('/users', async (req, res) => {    
    try {
        const userFound = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (userFound) {
            res.status(400).send({error:'User already exists'})
        } else {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const email = req.body.email
            const user = await User.create({ firstName, lastName, email })
            res.status(201).send(user);
        }
    } catch (e) {
        res.status(500).send(e);
    }
});
router.put('/users/:user_id',async(req,res)=>{
    const userId = req.params.user_id
    try{
        const user = await User.findByPk(userId)
        await user.update({dateOfBirth: req.body.dateOfBirth})
        res.status(200).send(user)
    }catch (e){
        res.status(500).send(e)
    }
});

module.exports = router;