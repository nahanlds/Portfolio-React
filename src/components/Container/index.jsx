import style from "./Container.module.css";

// eslint-disable-next-line react/prop-types
export default function Container({ children }){
    return(
        <section className={style.container}>
            {children}
        </section>
    )
}