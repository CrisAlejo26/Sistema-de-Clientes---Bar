import { useDispatch, useSelector } from "react-redux"
import { loadDataLocalStorage } from "../../redux/user/userSlice"
import { useEffect } from "react"

export const CardDashboardOne = () => {
    const {delivery} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadDataLocalStorage())
    }, [])
    return (
        <>
            <div className='dashboard__dat dashboard__dat__img'>
                <div>
                    <h4 className='dashboard__dat__subtitle'>Pedidos</h4>
                    <h2 className='dashboard__dat__title'>{delivery ? Object.keys(delivery).length : 0}</h2>
                </div>
                <img src="/pedidoIcon.svg" alt="no se puede ver" />
            </div>
        </>
    )
}
