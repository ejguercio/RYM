const router = require("express").Router();//de express importo solo el router

const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav");
const getCharById = require("../controllers/getCharById");



router.get("/login", login);

router.post("/login", postUser)

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

router.get("/character/:id", getCharById);//(req,res)=>{} salen de las rutas y las recibimos en el controlador
module.exports = router;