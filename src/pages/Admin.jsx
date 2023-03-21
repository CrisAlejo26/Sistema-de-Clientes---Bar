import '../styles/admin.css'
import { GraphicBar } from './../components/admin/GraphicBar';
import { CardDashboardOne } from './../components/admin/CardDashboardOne';
import { CardDashboardTwo } from './../components/admin/CardDashboardTwo';
import { CardDashboardTree } from './../components/admin/CardDashboardTree';
import { CardDashboardFour } from './../components/admin/CardDashboardFour';
import { GraphicsCircle } from './../components/admin/GraphicsCircle';

export const Admin = () => {

    return (
        <>
            <div className='container'>
                <div className='container__dashboard--1'>
                    <CardDashboardOne/>
                    <CardDashboardTwo/>
                    <CardDashboardTree/>
                    <CardDashboardFour/>
                </div>
                <div className='container__dashboard--2'>
                    <GraphicsCircle/>
                    <div className='container__dashboard__item--2'>
                        <GraphicBar/>
                    </div>
                </div>
            </div>
        </>
    )
}
