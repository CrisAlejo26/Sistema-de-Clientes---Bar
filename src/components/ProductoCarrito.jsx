import { useState } from "react";

export const ProductoCarrito = () => {

    const [cantidad, setCantidad] = useState(0);

    function sumar() {
        setCantidad(cantidad + 1);
        }
    
    function restar() {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <>
            <div className="container__datos--articulos">
                <div className="container__datos__img">
                    <img className="container__datos__img--imagen" src="/public/fondo-pedidos.jpg" alt="no se puede ver" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam deleniti ratione accusamus debitis.</p>
                </div>
                <h4 className="container__datos__img__informacion">$ 250</h4>
                <div className="container__datos__img__input">
                    <button type="button" onClick={() => sumar()}>+</button>
                    <input type="number" id="cantidad" name="cantidad" value={cantidad}/>
                    <button type="button" onClick={() => restar()}>-</button>
                </div>
                <h4 id="precio__pc" className="container__datos__img__informacion">$ 254875</h4>
                <div className="container__datos--articulos__button--eliminar"><button  >Eliminar</button></div>
            </div>
        </>
    )
}
