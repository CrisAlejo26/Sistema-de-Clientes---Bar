import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/admin.css'

export const Admin = () => {

    const [link, setLink] = useState(0)

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
                        <Link onClick={() => setLink(0)} to={'/admin'} className={`${link === 0 ? 'nav__link nav__link__bg' : 'nav__link'}`}>
                            <div className='nav__link__cta'>
                                <img src="/inicio.svg" width={'30px'} height={'30px'} alt="no se puede ver"/>
                                <h5>Inicio</h5>
                            </div>                        
                        </Link>
                        <Link onClick={() => setLink(1)} to={'/admin/pedidos'} className={`${link === 1 ? 'nav__link nav__link__bg' : 'nav__link'}`}>
                            <div className='nav__link__cta'>
                                <img src="/pedidoAdmin.svg" width={'30px'} height={'30px'} alt="no se puede ver"/>
                                <h5>Pedidos</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <div className='container__dashboard--1'>
                    <div className='dashboard__dat dashboard__dat__img'>
                        <div>
                            <h4 className='dashboard__dat__subtitle'>Pedidos</h4>
                            <h2 className='dashboard__dat__title'>584</h2>
                        </div>
                        <img src="/pedidoIcon.svg" alt="no se puede ver" />
                    </div>
                    <div className='dashboard__dat'>
                        Mesas Ocupadas
                    </div>
                    <div className='dashboard__dat'>
                        Promedio en atención
                    </div>
                </div>
                <div className='container__dashboard--2'>
                    <div className='container__dashboard__item--1'>
                    </div>
                    <div className='container__dashboard__item--2'>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
