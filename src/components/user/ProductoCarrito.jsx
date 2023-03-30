import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cantidadProductForItemThunk, deleteProductCarShopThunk, totalShopPriceThunk, validationCantCarShopThunk } from "../../redux/user/userThunk";
import { formaterDinero } from "../../helpers/functions";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} severity="filled" {...props} />;
});

export const ProductoCarrito = ({precio, urlImage, descripcion, id, cantidad, totalProduct}) => {

    const dispatch = useDispatch()
    const {shop} = useSelector(state => state.user)
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    }

    useEffect(() => {
        dispatch(cantidadProductForItemThunk({
            id: id,
            cantidad: cantidad
        }))
    }, [])

    useEffect(() => {
        dispatch(totalShopPriceThunk())
    }, [totalProduct])

    useEffect(() => {
        dispatch(validationCantCarShopThunk())
    }, [shop])

    function sumar() {
        dispatch(cantidadProductForItemThunk({id: id, cantidad: cantidad + 1}));
        }
    
    function restar() {
        if (cantidad > 1) {
            dispatch(cantidadProductForItemThunk({id: id, cantidad: cantidad - 1}));
        }
    }

    const onChangeCant = e => {
        dispatch(cantidadProductForItemThunk({ id: id, cantidad: Number(e.target.value) }))
    }

    const deleteCar = (id) => {
        dispatch(deleteProductCarShopThunk(id))
        dispatch(validationCantCarShopThunk())
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 3000);
    }

    return (
        <>
            <div className="container__datos--articulos">
                <div className="container__datos__img">
                    <img className="container__datos__img--imagen" src={urlImage} alt="no se puede ver" />
                    <p>{descripcion}</p>
                </div>
                <h4 className="container__datos__img__informacion">{formaterDinero(precio)}</h4>
                <div className="container__datos__img__input">
                    <button type="button" onClick={() => sumar()}>+</button>
                    <input onChange={onChangeCant} type="number" id="cantidad" name="cantidad" value={cantidad}/>
                    <button type="button" onClick={() => restar()}>-</button>
                </div>
                <h4 id="precio__pc" className="container__datos__img__informacion">{formaterDinero(totalProduct)}</h4>
                <div className="container__datos--articulos__button--eliminar"><button onClick={() => deleteCar(id)} >Eliminar</button></div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        Producto Eliminado
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}
