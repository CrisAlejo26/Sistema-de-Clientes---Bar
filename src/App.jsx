import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavAdmin } from "./components/admin/NavAdmin"
import { ProtectedRouteUser } from "./components/user/ProtectedRouteUser"
import { Admin } from "./pages/Admin"
import { Carrito } from "./pages/Carrito"
import { Delivery } from "./pages/Delivery"
import { DetailsDelivery } from "./pages/DetailsDelivery"
import { Inicio } from "./pages/Inicio"
import { Login } from "./pages/Login"
import { Pedido } from "./pages/Pedido"
import { userThunk } from "./redux/user/userThunk"
import { loadTableLocalStorage } from "./redux/user/userSlice"

function App() {

  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(userThunk())
  }, []);

  useEffect(() => {
    dispatch(loadTableLocalStorage())
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Inicio/>} index />
        <Route element = {<ProtectedRouteUser/>}>
          <Route path="/pedidos" element = {<Pedido/>} />
          <Route path="/carrito" element = {<Carrito/>} />
          <Route path="/detalles/:id" element = {<DetailsDelivery/>}/>
        </Route>
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