import {Input} from '../components/Input'
import { Nav } from './../components/Nav';

export const Inicio = () => {
    return (
        <>
        <Nav/>
            <div className="bg">
                <div className="containerInput">
                    <img className="container__img" src="/logo transparente blanco.png" alt="no se puede ver" />
                    <Input/>
                </div>
            </div>
        </>
    )
}
