import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const GraphicsCircle = () => {

    const percentage = 66;
    return (
        <div className='container__dashboard__item--1'>
            <div className='container__dashboard__item--1__grafico--1'>
                <CircularProgressbar
                    value={percentage} 
                    text={`${percentage}%`}
                    styles={buildStyles({
                        pathColor: '#49416D',
                        textColor: '#49416D'
                    })}
                />
                
            </div>
            <h3 className='dashboard__dat__subtitle dashboard__dat__graphic--cicle__title'>Tenemos <span className='dashboard__dat__title' style={{color: '#49416D'}}>7</span> pedidos pendientes por atender</h3>
        </div>
    )
}
