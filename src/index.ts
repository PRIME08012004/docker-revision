import express from "express"

const app = express();
app.use(express.json()) 
app.post("/signin",(req,res )=>{
    const username=req.body.username;
    const password=req.body.password;
    res.json({
        username,
        password
    })
} )
app.get("/",(req ,res)=>{
    res.json({
        msg:"Testing"
    })
})

app.listen(3000)
