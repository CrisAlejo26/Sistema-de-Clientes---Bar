import { Button } from '@mui/material'

export const PedidoPendiente = () => {
    return (
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
    )
}
