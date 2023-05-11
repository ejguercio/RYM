import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";
import axios from "axios";

export const addFav = (character) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const { data } = await axios.post(endpoint, character) //character es lo que recibe por Body nuestro servidor
                                                                   //cuando hacemos la peticion     
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        };
        
    } catch (error) {
        console.log(error);
    }
};

export const removeFav = (id) => {
    try {
        const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
        return async (dispatch) => {
            const { data } = await axios.delete(endpoint)
    
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        };
        
    } catch (error) {
        console.log(error);
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};