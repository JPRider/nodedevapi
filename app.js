const express = require("express"); 
const requestIP = require('request-ip');

const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.get("/myip", (req, res) => { 
    console.log(req.ip);
    let ip = req.header('x-forwarded-for');
    let xRealIP = requestIP.getClientIp(req);
    res.send("<h2>It's Working!</h2>"+ip+" RealIP:"+xRealIP); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});