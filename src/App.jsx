import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { NavAdmin } from "./components/admin/NavAdmin"
import { Admin } from "./pages/Admin"
import { Carrito } from "./pages/Carrito"
import { Delivery } from "./pages/Delivery"
import { DetailsDelivery } from "./pages/DetailsDelivery"
import { Inicio } from "./pages/Inicio"
import { Login } from "./pages/Login"
import { Pedido } from "./pages/Pedido"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Inicio/>} index />
      <Route path="/pedidos" element = {<Pedido/>} />
      <Route path="/carrito" element = {<Carrito/>} />
      <Route path="/login" element = {<Login/>} />
      <Route path="/admin/" element = {<NavAdmin/>}>
        <Route index element = {<Admin/>}/>
        <Route path="pedidos" element = {<Delivery/>}/>
      </Route>
      <Route path="/detalles" element = {<DetailsDelivery/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App