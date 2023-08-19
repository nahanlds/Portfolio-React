import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CabecalhoLink({ url, children }){
    return(
        <NavLink to={url}>
            {children}
        </NavLink>
    )
}