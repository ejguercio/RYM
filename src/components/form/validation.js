const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexUnNumero = /.*\d+.*/;
const regexCantCarateres = /^.{6,10}$/;

const validation = (userData, errors, setErrors) => {
    // CORREO

    if (userData.email==="") 
        setErrors({ ...errors, email: "campo vacio" })
    else if(userData.email.length>35)
        setErrors({ ...errors, email: "no puede haber mas de 35 caracteres" })
    else if (!regexCorreo.test(userData.email))
        setErrors({ ...errors, email: "tiene que ingresar un email" })
    else
    setErrors({ ...errors, email: "" })
    
    //CONTRASEÑA
    if (!regexCantCarateres.test(userData.password))
        setErrors({ ...errors, password: "debe tener entre 6 y 10 caracteres" })
    else if (!regexUnNumero.test(userData.password))
        setErrors({ ...errors, password: "debe haber al menos un numero" })
    else
        setErrors({ ...errors, password: "" })

};




export default validation;