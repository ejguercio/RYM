const http = require("http");
const {getCharById} = require("./controllers/getCharById")

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if (url.includes('/rickandmorty/character')) {
        const id = url.split("/").at(-1); //con el .at acceso a la ultima posicion del arr que crea el split
        //const character = data.find(charac => charac.id == id)//con doble igual no importa si tengo id de diferente tipo de dato
        getCharById(res, id)
    }
});

server.listen(3001, () => {
    console.log("server corriendo en el puerto 3001")
});

