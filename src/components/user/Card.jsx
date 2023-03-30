import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formaterDinero } from '../../helpers/functions'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { addSetCarShop, detailsDeliveryThunk, setIddetailsDeliveryThunk, validationCantCarShopThunk } from '../../redux/user/userThunk'
import '../../styles/card.css'
import * as React from 'react';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} severity="filled" {...props} />;
});

export const Card = ({nombre, id, precio, descripcion, urlImage}) => {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    }

    const onClickNavigate = () => {
        dispatch(setIddetailsDeliveryThunk(id))
        dispatch(detailsDeliveryThunk())
        navigate(`/detalles/${id}`)
    }

    const onClickAddCarShop = () => {
        dispatch(addSetCarShop({nombre, id, precio, descripcion, urlImage, cantidad: 1}))
        dispatch(validationCantCarShopThunk())
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 3000);
    }

    return (
        <div className="card">
            <img className='imagen' src={urlImage} alt="Denim Jeans" style={{width: '100%'}}/>
            <div className='card__flex'>
                <div className='card__flex__info'>
                    <h1 className='card__titulo'>{nombre}</h1>
                    <p className="price">{formaterDinero(precio)}</p>
                    <p className='parrafo'>{descripcion}</p>
                    <div className='card__flex__buttons'>
                        <button onClick={() => onClickNavigate()} className='button1'>
                            Ver
                        </button>
                        <button onClick={() => onClickAddCarShop()} className='button2'>
                            Pedir
                        </button>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Agregado a la bandeja de comida
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
            </div>
        </div>
    )
}
