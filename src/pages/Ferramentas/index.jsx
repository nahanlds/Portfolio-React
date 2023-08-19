import style from "./Ferramentas.module.css"
import imgHtml from "/imgLogos/logo-html-5-256.png"
import imgCss from "/imgLogos/logo-css-3-256.png"
import imgJavascript from "/imgLogos/logo-javascript-256.png"
import imgReact from "/imgLogos/logo-react-256.png"
import imgTailwind from "/imgLogos/tailwind-css-256.png"
import imgBootstrap from "/imgLogos/bootstrap-256.png"

export default function Ferramentas(){
    return(
        <section className={style.container}>
            <h2>Ferramentas</h2>
            <div className={style.ferramentas}>
                <div className={style.card}>
                    <img src={imgHtml} alt="html" />
                    <p>html</p>
                </div>
                <div className={style.card}>
                    <img src={imgCss} alt="css" />
                    <p>css</p>
                </div>
                <div className={style.card}>
                    <img src={imgJavascript} alt="javascript" />
                    <p>javascript</p>
                </div>
                <div className={style.card}>
                    <img src={imgReact} alt="react" />
                    <p>react</p>
                </div>
                <div className={style.card}>
                    <img src={imgTailwind} alt="tailwind" />
                    <p>tailwind css</p>
                </div>
                <div className={style.card}>
                    <img src={imgBootstrap} alt="bootstrap" />
                    <p>bootstrap</p>
                </div>
            </div>
        </section>
    )
}