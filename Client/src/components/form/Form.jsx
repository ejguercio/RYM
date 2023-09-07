import css from "./Form.module.css"
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
       
        setUserData({ ...userData, [property]: value })
        setErrors(validation({ ...userData, [property]: value })); //le paso lo mismo que va a tener el estado para que no haya delay
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };
    return (
        <form className={css.contenedor} onSubmit={handleSubmit}>
            <label className={css.labelText} htmlFor="email">EMAIL</label>
            <input placeholder="email..."
                type="text" name="email"
                value={userData.email}
                onChange={handleChange}>
            </input>
            <span className={css.errores}>{errors.email}</span>
            <label className={css.labelText} htmlFor="password">PASSWORD</label>
            <input placeholder="password..."
                type="text" name="password"
                value={userData.password}
                onChange={handleChange} >
            </input>
            <span className={css.errores} >{errors.password}</span>
            <button className={css.boton} type="submit">Submit</button>
        </form>
    )
};

export default Form;