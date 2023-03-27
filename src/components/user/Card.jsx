import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formaterDinero } from '../../helpers/functions'
import { detailsDeliveryThunk, setIddetailsDeliveryThunk } from '../../redux/user/userThunk'
import '../../styles/card.css'

export const Card = ({nombre, id, precio, descripcion, urlImage}) => {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    const onClickNavigate = () => {
        dispatch(setIddetailsDeliveryThunk(id))
        dispatch(detailsDeliveryThunk())
        setTimeout(() => {
            navigate(`/detalles/${id}`)
        }, 200);
    }

    return (
        <div className="card">
            <img className='imagen' src={urlImage} alt="Denim Jeans" style={{width: '100%'}}/>
            <div className='card__flex'>
                <h1 className='card__titulo'>{nombre}</h1>
                <p className="price">{formaterDinero(precio)}</p>
                <p className='parrafo'>{descripcion}</p>
                <div className='card__flex__buttons'>
                    <button onClick={() => onClickNavigate()} className='button1'>
                        Ver
                    </button>
                    <button className='button2'>
                        Pedir
                    </button>
                </div>
            </div>
        </div>
    )
}
