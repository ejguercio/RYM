import css from "./Form.module.css"
import { useState } from "react";

const Form = ()=>{

const [userData, setUserData]= useState({
    email:"",
    password:""
});
const [erros,setErrors]=useState({});

const handleChange= (event)=>{
    setUserData({...userData, [event.target.name]: event.target.value})
};
    return(
        <form className={css.contenedor}>
            <label>EMAIL</label>
            <input placeholder="email..." name="email" value={userData.email} onChange={handleChange}></input>
            <label>PASSWORD</label>
            <input placeholder="pass..." name="password" value={userData.password} onChange={handleChange} ></input>
            <button>Submit</button>
        </form>     
    )
};

export default Form;