import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/modal.css'
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Modal = ({setOpenModal, modal}) => {

    const [tiempoRestante, setTiempoRestante] = useState(20 * 60);
    const navigate = useNavigate()
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTiempoRestante((prevTiempoRestante) => prevTiempoRestante - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    const onClickRed = () => {
        setOpenModal(false)
        navigate("/")
    }

    return (
        <>  
            {modal ?
                <>
                <div className="cont">
                    <div className='cont__modal'>
                        <div className='cont__modal__encabezado'>
                            <h3 className='cont__modal__encabezado__title'>Pedido realizado</h3>
                        </div>
                        <button onClick={() => setOpenModal(false)} className='cont__modal__button'><FontAwesomeIcon size='lg' icon={faXmark} style={{color: "#d84545",}} /></button>
                        <div className='cont__modal__contenido'>
                            <h2>Tu pedido estará en: {minutos.toString().padStart(2, "0")}:{segundos.toString().padStart(2, "0")}<span>min</span></h2>
                            <h5>Pronto iremos a tu mesa.</h5>
                            <div>
                                <Button onClick={() => onClickRed()} variant='contained' color="success">Aceptar</Button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            :
                null
            }
            
        </>
    )
}
