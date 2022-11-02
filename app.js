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

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});