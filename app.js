const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 3000; 
app.set('trust proxy', true);
// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.get("/myip", (req, res) => { 
    console.log(req.ip);
    let ip = req.header('x-forwarded-for');
    let xRealIP = req.headers['x-real-ip']+req.headers['x-original-forwarded-for'];
    res.send("<h2>It's Working!</h2>"+ip+" RealIP:"+xRealIP); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});