import { BrowserRouter, Route, Routes } from "react-router-dom"
import { InicioAdmin } from "./components/InicioAdmin"
import { Admin } from "./pages/Admin"
import { Carrito } from "./pages/Carrito"
import { Inicio } from "./pages/Inicio"
import { Login } from "./pages/Login"
import { Pedido } from "./pages/Pedido"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element = {<Inicio/>} />
      <Route path="/pedidos" index element = {<Pedido/>} />
      <Route path="/carrito" index element = {<Carrito/>} />
      <Route path="/login" index element = {<Login/>} />
      <Route path="/admin" element = {<Admin/>}>
        <Route path="inicio" element = {<InicioAdmin/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App