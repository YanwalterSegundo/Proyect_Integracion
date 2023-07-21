const http = require("http")
require("dotenv").config();
const {PORT, PASSWORD} = process.env;

http
.createServer(( req,res )=>{
    res.setHeader("Access-Control-Allow-Origin","");
// "/rickandmorty/character"

//if(req.url)
    if (req.url.includes("/rickandmorty/character")){
        //quedarme con el id
        const id = req.url.split("/").at(-1);

        const character = data.find((element) => element.id === Number(id));

        if(character){
            res
            .writeHead(200,{"Content-type" : "application/json"})
            .end(JSON.stringify({msg: "OK", data: character}));

        } else{
            res
            .writeHead(404,{"Content-type": "application/json"})
            .end(JSON.stringify({
                msg: "Not Found", 
                data: "The character with the id ${id} was not found",
            }));

        }
    }
})
.listen(PORT,()=>{
    //Hacer algo con la base de datos, ñevantarla,cargarla,etc

});
  
