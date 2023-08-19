import perfil from "/perfil.jpeg";
import style from "./SobreMim.module.css";

export default function SobreMim(){
    return(
        <div className={style.container}>
            <div>
                <img src={perfil} alt="foto de perfil" />
            </div>
            <h2>
                Olá, Eu sou Nathan Desenvolvedor front-end
            </h2>
            <h3>Bem-vindo ao meu portifolio</h3>
            <p>
                Tenho conhecimento em Html, Css, Javascript, Tailwindcss, Bootstrap e Sass e atualmente estou estudando typescript e React e busco me aprimorar cada vez mais. Sou uma pessoa dedicada e apaixonada por tecnologia e jogos.
            </p>
            <ul className={style.links}>
                <li>
                    <a href="https://www.linkedin.com/in/nathan-lima-dias-silva-8413b024b/" target="_blank" rel="noreferrer">
                        <i className="fi fi-brands-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nahanlds" target="_blank" rel="noreferrer">
                    <i className="fi fi-brands-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}