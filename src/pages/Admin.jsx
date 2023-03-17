import { Link } from 'react-router-dom'
import '../styles/admin.css'

export const Admin = () => {
    return (
        <>
            <nav className='navs'>
                <div className="nav__container">
                    <Link style={{textDecoration: 'none'}} to={'/admin'}><h2 className='nav__container__titulo'>Administrador de Bar</h2></Link>
                    <label htmlFor="check" className='nav__icon'>
                        <img src="/menu.svg" className='nav__img' alt="no se puede ver" />
                    </label>
                    <input type="checkbox" id="check" className="nav__checkbox" />
                    <div className="nav__items">
                        <Link to={'/admin/inicio'} className="nav__link"><img src="/inicio.svg" alt="no se puede ver"/></Link>
                        <Link href="#" className="nav__link">Acerca de</Link>
                        <Link href="#" className="nav__link">Contacto</Link>
                        <Link href="#" className="nav__link">Blog</Link>
                    </div>
                </div>
            </nav>
            <h2>Hola mundo</h2>
        </>
    )
}
