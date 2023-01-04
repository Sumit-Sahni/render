const express =  require("express");
const path = require("path");
const PORT = process.env.port || 5000;
const app = express();

// app.use(express.static(path.join(__dirname,"./client/build")));

// console.log(__dirname)

// app.use("*", function(_, res){
//      res.sendFile(path.join(__dirname,"./client/build/index.html")),
//      function(err) {
//         res.status(500).send(err.message)
//      }
// });
app.get("/", (req, res)=>{
    res.send("Welcome")
})
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})