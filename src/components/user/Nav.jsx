import { Link } from "react-router-dom"
// import {IoFastFoodSharp}

export const Nav = () => {
    return (
        <div className="nav">
            <nav className="container">
                <div className="container__nav__separacion">
                    <div className="nav__isesion__container nav__img--sesion">
                        <Link to={'/carrito'} ><IoFastFoodSharp/><span className="nav__img--sesion__span">1</span></Link>
                    </div>
                    <ul>
                        <Link className="nav__isesion" to={'/login'}>
                            <div className="nav__isesion__container">
                                <img src="/iniciar-sesion.png" alt="no se puede ver" className="nav__img--sesion"/>
                            </div>Iniciar Sesion
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
