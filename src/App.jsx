import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Delivery } from "./components/admin/Delivery"
import { NavAdmin } from "./components/admin/NavAdmin"
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
      <Route path="/admin/" element = {<NavAdmin/>}>
        <Route index element = {<Admin/>}/>
        <Route path="pedidos" element = {<Delivery/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App