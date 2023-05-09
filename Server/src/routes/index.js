const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();//de express importo solo el router

router.get("/character/:id", getCharById);//(req,res)=>{} salen de las rutas y las recibimos en el controlador

router.get("/login", login); 

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;