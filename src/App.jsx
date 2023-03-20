import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PedidosAdmin } from "./components/PedidosAdmin"
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
      <Route path="/pedidos" element = {<Pedido/>} />
      <Route path="/carrito" element = {<Carrito/>} />
      <Route path="/login" element = {<Login/>} />
      <Route path="/admin/" element = {<Admin/>}>
        <Route path="pedidos" index element = {<PedidosAdmin/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App