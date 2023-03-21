import { Button } from '@mui/material'
import '../styles/pedidosAdmin.css'

export const Delivery = () => {
    return (
        <>
            <div className="background">
                <div style={{paddingTop: '1rem'}} className='container'>
                    <div className='container__table--background'>
                        <h3 style={{color: '#706f6f'}}>Listado de Pedidos</h3>
                        <div className='container__table--background__div'>
                            <table className='container__table--background__table'>
                                <thead>
                                    <tr className='container__table--background__table__tr'>
                                        <th style={{color: 'white'}} className='container__table--background__table__th--td'>Mesa</th>
                                        <th style={{color: 'white'}} className='container__table--background__table__th--td'>Pedido</th>
                                        <th style={{color: 'white'}} className='container__table--background__table__th--td'>Precio</th>
                                        <th style={{color: 'white'}} className='container__table--background__table__th--td'>Tiempo Transcurrido</th>
                                        <th style={{color: 'white'}} className='container__table--background__table__th--td'>Completar</th>
                                        <th style={{color: 'white'}} className='container__table--background__table__th--td'>Cancelar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='container__table--background__table__tr'>
                                        <td className='container__table--background__table__th--td' data-label='Mesa'>Mesa 5</td>
                                        <td style={{fontSize: '.9rem'}} className='container__table--background__table__th--td' data-label='Pedido'>
                                            <p>- Pescado</p>
                                            <p>- Tomate Frito</p>
                                            <p>- Huevos Rotos</p>
                                            <p>- Cerveza</p>
                                        </td>
                                        <td className='container__table--background__table__th--td' data-label='Precio'>$ 548</td>
                                        <td className='container__table--background__table__th--td' data-label='Tiempo Transcurrido'>10:21min</td>
                                        <td className='container__table--background__table__th--td' data-label='Completar'>
                                        <Button variant="contained" color='success'>Ya se sirvió</Button>
                                        </td>
                                        <td className='container__table--background__table__th--td' data-label='Cancelar'>
                                        <Button variant="outlined" color='error'>Cancelado</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
