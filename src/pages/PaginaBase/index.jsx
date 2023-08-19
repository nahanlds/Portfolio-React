import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Container from "../../components/Container";

export default function PaginaBase(){
    return(
        <main>
            <Cabecalho />
                <Container>
                    <Outlet />
                </Container>
            <Rodape />
        </main>
    )
}