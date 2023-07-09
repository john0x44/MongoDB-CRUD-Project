// Description: Handling a node server with MongoDB

const express = require('express')
const mongoose = require('mongoose')
const profileModel = require('./models/profileModel')

const app = express()

// Use middleware 
app.use(express.json())

// Declare some routes 

// Get request 
app.get('/profiles',async(req,res)=>{
    try{
        const profile = await profileModel.find({});
        res.status(200).json(profile);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.get('/profiles/:id',async(req, res)=>{
    try{
        const {id} = req.params;
        const profile = await profileModel.findById(id);
        res.status(200).json(profile);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

// Put request to update profile handling
app.put('/profiles/:id', async(req, res)=>{
    try { 
        const {id} = req.params;
        const profile = await profileModel.findByIdAndUpdate(id, req.body);
        if(!profile){return res.status(404).json({message: `Cannot find profile [${id}]`})}
        const updatedProfile = await profileModel.findById(id);
        res.status(200).json(updatedProfile);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

// Delete request to delete a profile 
app.delete('/profiles/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const profile = await profileModel.findByIdAndDelete(id);
        if(!profile){return res.status(404).json({message: `Cannot find profile [${id}]`})}
        res.status(200).json(profile);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

// Post request 
app.post('/profile',async (req,res)=>{
    try{
        const profile = await profileModel.create(req.body)
        res.status(200).json(profile);
        console.log("MongoDB: New profile added!")
    }catch (error){
        console.log(req.body)
        res.send(req.body)
        res.status(500).json({message: error.message})
    }
})


// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:12345@profiledb.5bnmrke.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('MongoDB connection has been established!')
    app.listen(3000,()=>{
        console.log("Server is running")
    })    
}).catch(()=>{
    console.log('MongoDB connection could not be established!')
})
