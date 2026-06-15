import express from "express"

const app = express();
app.use(express.json()) 

app.get("/",(req ,res)=>{
    res.json({
        msg:"Testing"
    })
})

app.listen(3000)
