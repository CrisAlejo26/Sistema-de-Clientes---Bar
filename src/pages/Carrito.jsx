import { ProductoCarrito } from './../components/user/ProductoCarrito';
import { Nav } from './../components/user/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { formaterDinero } from '../helpers/functions';
import { buyThunk, deleteAllProductsCarShopThunk } from '../redux/user/userThunk';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import { useState } from 'react';
import '../styles/modal.css'
import { Modal } from '../components/Modal';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} severity="filled" {...props} />;
});

export const Carrito = () => {

    const {shop, shopTotal, lengthCar} = useSelector(state => state.user)
    const [open, setOpen] = useState(false);
    const [modal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
    }

    const onClickCanceled = () => {
        dispatch(deleteAllProductsCarShopThunk())
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 3000);
    }

    const buyAll = () => {
        dispatch(buyThunk())
        setOpenModal(true)
    }

    return (
        <>
            <Nav/>
            <div className="container">
                <Button onClick={() => navigate('/pedidos')} style={{marginTop: '4rem'}} variant="outlined" color='success'>Volver</Button>
                {lengthCar ? 
                    <>
                        <h2 className="contanier__titulo">Bandeja de Comida</h2>
                        <div id="linea__datos" className="container__datos--compras">
                            <h3>Producto</h3>
                            <h3>Precio</h3>
                            <h3>Cantidad</h3>
                            <h3>Total</h3>
                            <h3>Eliminar</h3>
                        </div>
                    </>
                :
                null
                }
                
                {shop.map((item, i) => {
                    return (
                        <ProductoCarrito
                        nombre = {item.nombre}
                        precio = {item.precio}
                        urlImage = {item.urlImage}
                        descripcion = {item.descripcion}
                        key = {i}
                        id = {item.id}
                        cantidad = {item.cantidad}
                        totalProduct = {item.totalProduct ? item.totalProduct : item.precio}
                        />
                    )
                })}
                {lengthCar ? 
                    <>
                        <div className="container__total-a-pagar">
                            <h4>Total a Pagar:</h4>
                            <h4>{formaterDinero(shopTotal)}</h4>
                        </div>
                        <button href="#modal" role="button" onClick={() => buyAll()} className="container__pagar">Pagar Ahora</button>
                        <button style={{marginBottom: '1rem'}} onClick={() => onClickCanceled()} className="container__cancelar">Cancelar Todo</button>
                        
                    </>
                :
                    <h2 style={{textAlign: 'center', fontSize: '3rem', marginTop: '7rem'}}>No hay comida en la bandeja</h2>
                }
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        Cancelada la Compra
                    </Alert>
                </Snackbar>
                <Modal
                setOpenModal = {setOpenModal}
                modal = {modal}
                />
                
            </div>
        </>
    )
}
