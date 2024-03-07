const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/sum", (req,res)=>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    
    const ans = num1 + num2;
    // console.log(ans);
    res.send(ans.toString());
    
})

app.listen(port);
