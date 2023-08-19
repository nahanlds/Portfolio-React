import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaBase from './pages/PaginaBase'
import SobreMim from './pages/SobreMim'
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import Ferramentas from './pages/Ferramentas'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<SobreMim />}></Route>
          <Route path='/projetos' element={<Projetos />}></Route>
          <Route path='/contatos' element={<Contatos />}></Route>
          <Route path='/ferramentas' element={<Ferramentas />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
