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
            const email = req.body.email;
            const user = await User.create({ firstName, lastName, email });
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
        res.status(400).send({error:'Invalid update'}); 
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

router.get('/users', async (req, res)=>{
    try {
        const emailToFindUser  = req.query.email
        const user = await User.findOne({
            where:{
                email:emailToFindUser
        }});
        if(user){
            res.status(200).send(user);
        }
        res.status(404).send({error:'User not found'});
                
    } catch (e) {
        res.status(500).send(e);
        
    }
});

router.delete('/users/:user_id', async (req,res)=>{
    try {
        const userId = req.params.user_id;
        const user = await User.findByPk(userId)
        if(user){
            await user.destroy();
            res.status(200).send({message:'User deleted'})
        }
        res.status(404).send({error: 'User not found'})
    } catch (e) {
        res.status(500).send(e)
    }
});
router.get('/users/all', async(req,res)=>{
    try {
        const users = await User.findAll()
        if(users){
            res.status(200).send(users)
        }
        res.status(404).send({error:'Empty user registry '})
        
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router;