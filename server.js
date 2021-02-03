const express = require('express');
const app = express();


app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        users: req.params.id
    })
})

app.listen(8000,function(){console.log("Server is running")})