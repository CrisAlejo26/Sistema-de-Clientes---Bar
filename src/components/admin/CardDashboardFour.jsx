import { useSelector } from "react-redux"

export const CardDashboardFour = () => {

    const {timeTotal} = useSelector(state => state.user)

    const minutos = Math.floor(timeTotal / 60)

    return (
        <div style={{gap: '3rem'}} className='dashboard__dat dashboard__dat__img'>
            <div>
                <h4 style={{fontSize: '1rem'}} className='dashboard__dat__subtitle'>Promedio de</h4>
                <h4 style={{fontSize: '1rem'}} className='dashboard__dat__subtitle'>Atención</h4>
                <br/>
                <h2 style={{fontSize: '2rem'}} className='dashboard__dat__title'>{minutos ? minutos.toString().padStart(2, "0"): 0}<span style={{fontSize: '1.3rem'}}>min</span></h2>
            </div>
            <img src="/watchIcon.svg" alt="no se puede ver" />
        </div>
    )
}
