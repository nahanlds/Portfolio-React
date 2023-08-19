import perfil from "/perfil.jpeg";
import style from "./SobreMim.module.css";

export default function SobreMim(){
    return(
        <div className={style.container}>
            <div>
                <img src={perfil} alt="foto de perfil" />
            </div>
            <p>
                Olá, Eu sou Nathan Desenvolvedor front-end Bem-vindo ao meu portifolio
                <br/>
                Tenho conhecimento em Html, Css, Javascript, Tailwindcss, Bootstrap e Sass e atualmente estou estudando typescript e React e busco me aprimorar cada vez mais. Sou uma pessoa dedicada e apaixonada por tecnologia e jogos.
            </p>
            <ul className={style.links}>
                <li>
                    <a href="#" target="_blank">
                        <i className="fi fi-brands-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                    <i className="fi fi-brands-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}