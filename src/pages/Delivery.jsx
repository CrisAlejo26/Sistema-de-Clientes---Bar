import { useSelector } from 'react-redux'
import { EncabezadoTable } from '../components/admin/EncabezadoTable'
import { PedidoPendiente } from '../components/admin/PedidoPendiente'
import '../styles/pedidosAdmin.css'

export const Delivery = () => {

    const {delivery} = useSelector(state => state.user)
    let claves = Object.keys(delivery)
    return (
        <>
        {claves.length > 0 ? 
        <div className="background">
        <div style={{paddingTop: '1rem'}} className='container'>
            <div className='container__table--background'>
                <h3 style={{color: '#706f6f'}}>Listado de Pedidos</h3>
                <div className='container__table--background__div'>
                    <table className='container__table--background__table'>
                        <thead>
                            <EncabezadoTable/>
                        </thead>
                        <tbody>
                        {claves !== null ? 
                        claves.map((res, num) => {
                            return (
                                <PedidoPendiente
                                key = {num}
                                mesa = {res}
                                articulo = {delivery[res]}
                                />
                            )
                        })
                        :null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>        
        :
        <h3 style={{textAlign: 'center'}}>No hay pedidos pendientes por resolver</h3>
        }
            
        </>
        
    )
}
