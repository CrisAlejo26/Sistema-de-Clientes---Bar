import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Nav } from "../components/user/Nav"
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import '../styles/detailsDelivery.css'
import { Button } from "@mui/material";

export const DetailsDelivery = () => {
    return (
        <>
        <Nav/>
        <div className="container">
            <h2 className="container--title">Detalles</h2>
            <div className="container__flex">
                <div className="container__flex__image">
                    <img className="container__container--image__img" src="/fondo-pedidos.jpg" alt="no se puede ver" />
                </div>
                <div className="container__flex__info">
                    <h3 className="container__flex__info__title">Titulo</h3>
                    <p className="container__flex__info__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus odio molestiae exercitationem esse obcaecati veritatis placeat sapiente aspernatur perferendis suscipit aliquid ab ea dolor, officia, quas tempore. Corrupti, voluptatibus!</p>
                    <h3 className="container__flex__info__price">$ 250.99</h3>
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
