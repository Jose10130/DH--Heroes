const express =require("express")
const path =require ("path")

const app = express()
const port = 3030;

const createPach=(filename ) =>
path.join(__dirname,`./views/${filename}.html`)
app.use(express.static("public"))


app.get ("/",(req,res)=>{
    res.sendFile(createPach("index"))
});
app.get("/babbage",(req,res)=>{res.sendFile(createPach("babbage"))});

app.get("/berners-lee",(req,res)=>{res.sendFile(createPach("berners-lee"))
});
app.get("/clarke",(req,res)=>{res.sendFile(createPach("clarke"))
});
app.get("/hamilton",(req,res)=>{res.sendFile(createPach("hamilton"))
});
app.get("/hopper",(req,res)=>{res.sendFile(createPach("hopper"))
});
app.get("/lovelace",(req,res)=>{res.sendFile(createPach("lovelace"))
});
app.get("/turing",(req,res)=>{res.sendFile(createPach("turing"))
});




app.listen(port, ()=> console.log (`http://localhost:${port}`))