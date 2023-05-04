const axios = require("axios")

const getCharById = (res, id) => { //res viene del servidor
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data) //respuesta de la API
        .then(({ name, gender, species, origin, image, status }) => { //destructuting de data(del objeto que devuelve axios)
            const character = {
                id,
                name,
                gender,
                species,
                origin: origin.name,
                image,
                status
            }
            return res
                    .writeHead(200, { "Content-Type": "application/json" })
                    .end(JSON.stringify(character))//paso el objeto a formato JSON
        })
        .catch(error => {
            return res
                    .writeHead(500, { "Content-Type": "text/plain" })
                    .end(error.message)
        })
};


module.exports = { getCharById }