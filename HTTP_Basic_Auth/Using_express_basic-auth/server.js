import express from "express";
import expressBasicAuth from "express-basic-auth";
import path from "path"

// main application
const app = express();


// middlewares
app.use(expressBasicAuth({
    users : {
        'alex' : '123'
    },
    challenge: true,
    realm: "Exress Basic auth"
}))

app.set("author","alex")

// end points
app.get('/', (req,res)=>{
    
    res.sendFile(path.resolve('.', 'HTML/home.html'))
})



// start server

app.listen(3000,()=>{
    console.log('Server running');
})