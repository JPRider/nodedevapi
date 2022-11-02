const express = require("express"); 


const app = express(); 
const PORT = process.env.PORT || 3000; 
const MyKey = process.env.MyKey; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.get("/myip", (req, res) => { 
    console.log(req.ip);
    let ip = req.header('x-forwarded-for');   
    res.send("<h2>It's Working!</h2>"+ip+MyKey); 
}); 

app.get("/autonum/:id", (req, res) => { 
    let abc=generateRandomIntegerInRange(0,req.params.id) 
    console.log(req.params.id)
    res.send("<h2>It's Working!</h2>"+abc); 
}); 


function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});