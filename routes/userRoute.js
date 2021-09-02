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
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName','lastName','dateOfBirth']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error:'Invalid update'})
    }
    
    try{
        const userId = req.params.user_id
        const user = await User.findByPk(userId)
        updates.forEach((update) => user[update]=req.body[update])
        await user.save()
        res.status(200).send(user)
    }catch (e){
        res.status(500).send(e)
    }
});

module.exports = router;