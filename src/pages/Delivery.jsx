import { EncabezadoTable } from '../components/admin/EncabezadoTable'
import { PedidoPendiente } from '../components/admin/PedidoPendiente'
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
                                    <EncabezadoTable/>
                                </thead>
                                <tbody>
                                    <PedidoPendiente/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
