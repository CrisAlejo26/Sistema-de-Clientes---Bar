import { useSelector } from "react-redux"

export const CardDashboardTwo = () => {
    const {cantDeliveryAdmin} = useSelector(state => state.user)
    return (
        <>
        <div className='dashboard__dat dashboard__dat__img'>
            <div>
                <h4 style={{fontSize: '1rem'}} className='dashboard__dat__subtitle'>Mesas</h4>
                <h4 style={{fontSize: '1rem'}} className='dashboard__dat__subtitle'>Ocupadas</h4>
                <h2 className='dashboard__dat__title'>{cantDeliveryAdmin}</h2>
            </div>
            <img src="/tableIcon.svg" alt="no se puede ver" />
        </div>
        </>
    )
}
