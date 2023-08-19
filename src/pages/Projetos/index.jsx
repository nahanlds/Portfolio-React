import { useEffect, useState } from "react"
import Cards from "../../components/Cards";
import style from "./Projetos.module.css"

export default function Projetos(){
    const [projetos, setProjetos] = useState([]);
    useEffect(() => {
        const Repositorio = async () => {
            const retorno = await fetch('https://api.github.com/users/nahanlds/repos');
            const dados = await retorno.json();
            setProjetos(dados)
        }
        Repositorio()
    }, [])
    return(
        <main className={style.container}>
            <h2>Projetos</h2>
            {
                projetos.length > 0 ? (
                    <section className={style.cards}>
                        {projetos.map((repo) => {
                            return <Cards key={repo.id} url={repo.html_url} description={repo.description} name={repo.name}/>
                        })}   
                    </section>
                ) : (<p>Carregando...</p>)
            }

            
        </main>
    )
}