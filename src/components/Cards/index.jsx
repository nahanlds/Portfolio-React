import { Link } from "react-router-dom"
import style from "./Cards.module.css"

// eslint-disable-next-line react/prop-types
export default function Cards({  url, name, description }){
    return(
        
        <div className={style.container}>
            <h3 className={style.titulo}>
                {name}
            </h3>
            <p>
                {description}
            </p>
            <Link to={url}><i className="fi fi-rr-exit"></i></Link>
        </div>
        
    )
}