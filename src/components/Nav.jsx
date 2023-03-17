import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <div className="nav">
            <nav className="container">
                <div className="container__nav__separacion">
                    <div className="nav__isesion__container">
                        <Link to={'/carrito'} ><img src="/carrito.png" alt="no se puede ver" className="nav__img--sesion"/></Link>
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
