import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
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
import { loadDataLocalStorage, timeTotal, times } from "./redux/user/userSlice"

function App() {

  const dispatch = useDispatch()
  const {delivery, comp} = useSelector(state => state.user)
    
  useEffect(() => {
    dispatch(userThunk())
  }, []);

  useEffect(() => {
    if(Object.keys(delivery).length > 0){
        let claves = Object.keys(delivery)
          if(claves !== null) {
            for(let i=0; i< claves.length; i++){
              let clave = claves[i];
              delivery[clave].map(x => {
                  if (x.time !== undefined) {
                    if (x.time > 0) {
                      console.log(x.time);
                      const interval = setInterval(() => {
                        dispatch(times());
                      }, 1000);
                  
                      return () => clearInterval(interval);
                    }
                  }
              })
            }
          }
    }
    return
  }, [comp]);

  useEffect(() => {
    dispatch(loadDataLocalStorage())
  }, []);

  useEffect(() => {
    dispatch(timeTotal())
  }, [])

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