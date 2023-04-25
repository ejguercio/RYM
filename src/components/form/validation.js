const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexUnNumero = /.*\d+.*/;
const regexCantCarateres = /^.{6,10}$/;

const validation = (userData) => {
    const errors={}
    // CORREO
    if (!regexCorreo.test(userData.email)) {
        errors.email="debes ingresar un correo"
    }
    if (!userData.email){
        errors.email="campo vacio"
    }
    if (userData.email.length>35){
        errors.email="no pueden ser mas de 35 caracteres"
    }
    //CONTRASEÑA
    if(!regexCantCarateres.test(userData.password)){
        errors.password="tiene que haber entre 6 y 10 caracteres"
    }
    if(!regexUnNumero.test(userData.password)){
        errors.password="al menos deberia haber un numero"
    }
    return errors;
};




export default validation;