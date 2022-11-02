const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.get("/myip", (req, res) => { 
    console.log(req.ip)
    res.send("<h2>It's Working!</h2>"+req.ip); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});