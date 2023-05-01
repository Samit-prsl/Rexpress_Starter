const express = require('express');
const cors = require('cors');
const app = express();

//Assign a Port according to you.
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());

//a generealised route
app.get('/api',(req,res)=>{
    const User = [
        {
            id : 1,
            Name : "Test1",
        },
        {
            id : 2,
            Name : "Test2",
        },
        {
            id : 3,
            Name : "Test3",
        }
    ]
    res.json(User);
})

//Listening the server
app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
})
