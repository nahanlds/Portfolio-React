import { Link } from "react-router-dom";
import CabecalhoLink from "../CabecalhoLink";
import style from "./Cabecalho.module.css"

export default function Cabecalho(){
    return(
        <header className={style.cabecalho}>
            <Link to={"./"}>
                <h1 className={style.nome}>Nathan-lds</h1>
            </Link>
            <nav className={style.links}>
                <CabecalhoLink url={"/projetos"}>
                    Projetos
                </CabecalhoLink>
                <CabecalhoLink url={"/contatos"}>
                    Contatos
                </CabecalhoLink>
                <CabecalhoLink url={"/ferramentas"}>
                    Ferramentas
                </CabecalhoLink>

            </nav>
        </header>
    )
}