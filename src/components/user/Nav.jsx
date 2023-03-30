import { faChampagneGlasses, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export const Nav = () => {

    const {cant} = useSelector(state => state.user)

    return (
        <div className="nav">
            <nav className="container">
                <div className="container__nav__separacion">
                    <div className="nav__isesion__container ">
                        <Link to={'/carrito'} ><FontAwesomeIcon className="nav__img--sesion" size="xl" icon={faChampagneGlasses} style={{color: "#ffffff",}} /><span className="nav__img--sesion__span">{cant}</span></Link>
                    </div>
                    <ul>
                        <Link className="nav__isesion" to={'/login'}>
                            <div className="nav__isesion__container">
                                <FontAwesomeIcon className="nav__img--sesion" size="sm"  icon={faUser} style={{color: "#ffffff",}} />
                            </div>Iniciar Sesion
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
