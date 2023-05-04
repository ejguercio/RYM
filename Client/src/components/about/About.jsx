import css from "./About.module.css"
import fotoPerfil from "../../assets/images/about-foto.jpg"


const About = () => {
    return (
        <div className={css.contenedor}>
            <div className={css.contenedorDatos}>
                <h1 className={css.datos}>ACERCA DE MI</h1>
                <p className={css.datos}>Hola, mi nombre es Edgar Guercio y soy estudiante de
                    DESARROLLO WEB-FULLSTACK en el bootcamp soyHenry, he estado trabajando con las siguientes tecnologias:</p>
            </div>
            <div>
                <img className={css.imagenes} src={fotoPerfil} alt='' />
            </div>
        </div>
    )
};

export default About;

