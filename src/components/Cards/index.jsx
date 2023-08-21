import { Link } from "react-router-dom"
import style from "./Cards.module.css"

// eslint-disable-next-line react/prop-types
export default function Cards({  url, name, description, homePage }){
    return(
        
        <div className={style.container}>
            <h3 className={style.titulo}>
                {name}
            </h3>
            <p>
                {description}
            </p>
            <div className={style.links}>
                <Link to={url}><i className="fi fi-rr-exit"></i></Link>
                <Link to={homePage}><i className="fi fi-rr-browser"></i></Link>
            </div>

        </div>
        
    )
}