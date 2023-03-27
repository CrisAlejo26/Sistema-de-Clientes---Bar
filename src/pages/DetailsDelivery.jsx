import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Nav } from "../components/user/Nav"
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import '../styles/detailsDelivery.css'
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formaterDinero } from "../helpers/functions";

export const DetailsDelivery = () => {

    const idParameter = useParams()
    
    const {details} = useSelector(state => state.user)
    const detai = details[0]
    const {nombre, descripcion, urlImage, precio} = detai
    let prec = formaterDinero(precio)
    return (
        <>
        <Nav/>
        <div className="container">
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
        </>
    )
}
