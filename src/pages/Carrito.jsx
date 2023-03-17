import { Nav } from "../components/Nav"
import { ProductoCarrito } from "../components/ProductoCarrito";

export const Carrito = () => {
    
    return (
        <>
            <Nav/>
            <div className="container">
                <h2 className="contanier__titulo">Bandeja de Comida</h2>
                <div id="linea__datos" className="container__datos--compras">
                    <h3>Producto</h3>
                    <h3>Precio</h3>
                    <h3>Cantidad</h3>
                    <h3>Total</h3>
                    <h3>Eliminar</h3>
                </div>
                <ProductoCarrito/>
                <ProductoCarrito/>
                <div className="container__total-a-pagar">
                    <h4>Total a Pagar:</h4>
                    <h4>$ 500</h4>
                </div>
                <button className="container__pagar">Pagar Ahora</button>
                <button className="container__cancelar">Cancelar Todo</button>
            </div>
        </>
    )
}
