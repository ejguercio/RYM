import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./actions-type";

//los estados son dos arr iguales, mostramos myfavorites pero trabajamos con la copia, allFavs
//por lo cual solo estariamos filtrando los favoritos (personalmente le pondria allFavs al estado)
const initialState = {
    myFavorites: [],
    allFavs: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV: {
            return {// payload nos trae un obj con un personaje
                ...state,
                myFavorites: payload,
                allFavs: payload
            }
        }
        case REMOVE_FAV: {
            return {// payload nos trae el id de un personaje
                ...state,
                myFavorites: payload,
                allFavs: payload
            }
        }

        case FILTER: {
            const allFavsFiltrados = state.allFavs.filter(character => character.gender === payload)
            return {//payload nos trae un genero
                ...state,
                myFavorites: allFavsFiltrados
            }
        }
        case ORDER: { //voy a ordenar segun el id de los personajes que estan en fav
            const allFavsCopy = [...state.allFavs]; //hago una copia porque el sort no retorna otra arr sino que modifica 
            return {
                ...state,
                myFavorites:
                    payload === "A" ? allFavsCopy.sort((a, b) => a.name.localeCompare(b.name))
                        : allFavsCopy.sort((a, b) => b.name.localeCompare(a.name))
            }
        }

        default:
            return { ...state };
    }
}

export default reducer;