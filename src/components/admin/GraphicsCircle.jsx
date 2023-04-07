import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';

export const GraphicsCircle = () => {
    const {delivery} = useSelector(state => state.user)
    return (
        <div className='container__dashboard__item--1'>
            <div className='container__dashboard__item--1__grafico--1'>
                <CircularProgressbar
                    value={(Object.keys(delivery).length / 8) * 100} 
                    text={`${Object.keys(delivery).length * 10}%`}
                    styles={buildStyles({
                        pathColor: '#49416D',
                        textColor: '#49416D'
                    })}
                />
                
            </div>
            <h3 className='dashboard__dat__subtitle dashboard__dat__graphic--cicle__title'>Tenemos <span className='dashboard__dat__title' style={{color: '#49416D'}}>{delivery ? Object.keys(delivery).length : 0}</span> pedidos pendientes por atender</h3>
        </div>
    )
}
