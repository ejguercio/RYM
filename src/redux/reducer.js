import { ADD_FAV, REMOVE_FAV } from "./actions-type";

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV: {
            return {// payload nos trae un obj con un personaje
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        }
        case REMOVE_FAV: {
            return {//payload nos trae un id de un personaje
                ...state,
                myFavorites: state.myFavorites.filter(favorito => favorito.id!== payload )
            }
        }

        default:
            return { ...state };
    }
}

export default reducer;