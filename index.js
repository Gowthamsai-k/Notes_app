import express from "express"

const app = express()
app.use(cors());
app.use(express.json());
app.get("/" , (req , res) =>{
    res.send({"status" : "Healthy"})
})

app.post("/save" , (req , res) =>{
    const {task , description , active} = req.body
    console.log(task , description , active)

})

app.listen(3000 , () =>{
    console.log("server is running on port 3000")
})
