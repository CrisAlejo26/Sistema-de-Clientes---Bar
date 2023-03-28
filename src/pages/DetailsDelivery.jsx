import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Nav } from "../components/user/Nav"
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import '../styles/detailsDelivery.css'
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { formaterDinero } from "../helpers/functions";
import { useNavigate } from "react-router-dom";
import { clearDetailsDeliveryThunk } from "../redux/user/userThunk";
import { Footer } from "../components/user/Footer";

export const DetailsDelivery = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {details} = useSelector(state => state.user)
    const detai = details[0]
    const {nombre, descripcion, urlImage, precio} = detai
    let prec = formaterDinero(precio)

    const clearDetails = () => {
        dispatch(clearDetailsDeliveryThunk())
        navigate('/pedidos')
    }
    return (
        <>
        <Nav/>
        <div className="container">
        <Button style={{marginTop: '1rem'}} onClick={() => clearDetails()} variant="outlined">Volver</Button>
            <h2 className="container--title">Detalles</h2>
            <div className="container__flex">
                <div className="container__flex__image">
                    <img className="container__container--image__img" src={urlImage} alt="no se puede ver" />
                </div>
                <div className="container__flex__info">
                    <h3 className="container__flex__info__title">{nombre}</h3>
                    <p className="container__flex__info__paragraph">{descripcion}</p>
                    <h3 className="container__flex__info__price">{prec}</h3>
                    <div className="container__flex__info__stars">
                        <div>
                            <FontAwesomeIcon icon={faStar} size='sm'/>
                            <FontAwesomeIcon icon={faStar} size='sm'/>
                            <FontAwesomeIcon icon={faStar} size='sm'/>
                            <FontAwesomeIcon icon={faStar} size='sm'/>
                            <FontAwesomeIcon icon={faStarHalfStroke} size="sm" />
                        </div>
                        <h5 className="container__flex__info__stars__reviews">445 Reseñas</h5>
                    </div>
                    <div className="container__flex__info__button">
                        <Button  variant="outlined" size="medium">
                            Agregar a la bandeja
                        </Button>
                    </div>
                    <div className="container__flex__info__button__small">
                        <Button style={{fontSize: '.7rem'}} variant="outlined" size="small">
                            Agregar a la bandeja
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
