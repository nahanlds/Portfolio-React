import style from "./Contatos.module.css"

export default function Contatos(){
    return(
        <div className={style.container}>
            <h2>Contatos</h2>
            <p>Gostou do que viu? É só mandar uma mensagem. Responderei o mais rápido possível.</p>
            <div className={style.contatos}>
                <p>
                    <i className="fi fi-rr-envelope"></i>
                    nathanlds179@gmail.com
                </p>
                <p>
                    <i className="fi fi-brands-whatsapp"></i>
                    +55 35 8432-3888
                </p>

            </div>
        </div>
    )
}