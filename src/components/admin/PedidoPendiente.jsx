import { Button } from '@mui/material'
import { formaterDinero } from '../../helpers/functions';
import { useDispatch } from 'react-redux';
import { buttonServir } from '../../redux/user/userSlice';

export const PedidoPendiente = ({mesa, articulo}) => {

    const dispatch = useDispatch()

    const tot = articulo.reduce((t, p) => {
        if (p.precio !== undefined) {
            t += p.precio
        }
        return t
    }, 0)

    const ux = articulo.findIndex((element) => Object.keys(element).includes('time'));
    const minutos = Math.floor(articulo[ux].time / 60)
    const segundos = articulo[ux].time % 60
    


    return (
        <tr className='container__table--background__table__tr'>
            <td className='container__table--background__table__th--td' data-label='Mesa'>{mesa}</td>
            <td style={{fontSize: '.9rem'}} className='container__table--background__table__th--td' data-label='Pedido'>
                {articulo.map((i, h) => {
                    return (
                        <p key={h}>{i.nombre ? '-  ' + i.nombre : null}</p>
                    )
                })}
            </td>
            <td className='container__table--background__table__th--td' data-label='Precio'>{formaterDinero(tot)}</td>
            <td className='container__table--background__table__th--td' data-label='Tiempo Transcurrido'>{minutos === 0 ? "Se acabo el tiempo de espera": minutos.toString().padStart(2, "0") + ":" + segundos.toString().padStart(2, "0")}</td>
            <td className='container__table--background__table__th--td' data-label='Completar'>
                <Button onClick={() => dispatch(buttonServir(mesa))} variant="contained" color='success'>Ya se sirvió</Button>
            </td>
            <td className='container__table--background__table__th--td' data-label='Cancelar'>
                <Button onClick={() => dispatch(buttonServir(mesa))} variant="outlined" color='error'>Cancelado</Button>
            </td>
        </tr>
    )
}
