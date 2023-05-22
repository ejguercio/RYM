const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data } = await axios.get(`${URL}/${id}`) //la api arroja un error cuando hacemos mal la peticion
        const { status, name, species, origin, image, gender } = data;

        const character = { id, status, name, species, origin, image, gender }
        return res.status(200).json(character)

    } catch (error) {
        return res.status(404).send(error.response.data.error)//este error viene en un obejto que arroja la API
    }
}

module.exports = getCharById;