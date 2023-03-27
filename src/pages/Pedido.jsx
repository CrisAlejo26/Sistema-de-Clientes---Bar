import { useSelector } from 'react-redux';
import { Card } from './../components/user/Card';
import { Nav } from './../components/user/Nav';

export const Pedido = () => {
    
    const {data} = useSelector(state => state.user)
    return (
        <>
            <header className="contain__imagen">
                <div className="bg-pedido"> 
                    <Nav/>
                </div>
            </header>
            <main>
                <section className='section1'>
                    <div className='container'>
                        <div className='section__1'>
                            <h2 className='section1__titulo'>Comidas</h2>
                            <div className='flex'>
                                {data.map((rex, x) => {
                                    return (
                                        <Card
                                            nombre = {rex.nombre}
                                            id = {rex.id}
                                            urlImage = {rex.urlImage}
                                            descripcion = {rex.descripcion}
                                            precio = {rex.precio}
                                            key = {x}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section2'>
                    <div className='container'>
                        <div className='section__1'>
                            <h2 className='section1__titulo'>Tapas</h2>
                            <div className='flex'>
                            {data.map((rex, x) => {
                                    return (
                                        <Card
                                            nombre = {rex.nombre}
                                            id = {rex.id}
                                            urlImage = {rex.urlImage}
                                            descripcion = {rex.descripcion}
                                            precio = {rex.precio}
                                            key = {x}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section1'>
                    <div className='container'>
                        <div className='section__1'>
                            <h2 className='section1__titulo'>Bebidas</h2>
                            <div className='flex'>
                            {data.map((rex, x) => {
                                    return (
                                        <Card
                                            nombre = {rex.nombre}
                                            id = {rex.id}
                                            urlImage = {rex.urlImage}
                                            descripcion = {rex.descripcion}
                                            precio = {rex.precio}
                                            key = {x}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
