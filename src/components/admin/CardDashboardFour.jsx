import { useSelector } from "react-redux"

export const CardDashboardFour = () => {

    const {delivery} = useSelector(state => state.user)

    console.log(delivery);

    return (
        <div style={{gap: '3rem'}} className='dashboard__dat dashboard__dat__img'>
            <div>
                <h4 style={{fontSize: '1rem'}} className='dashboard__dat__subtitle'>Promedio de</h4>
                <h4 style={{fontSize: '1rem'}} className='dashboard__dat__subtitle'>Atención</h4>
                <br/>
                <h2 style={{fontSize: '2rem'}} className='dashboard__dat__title'>20<span style={{fontSize: '1.3rem'}}>min</span></h2>
            </div>
            <img src="/watchIcon.svg" alt="no se puede ver" />
        </div>
    )
}
