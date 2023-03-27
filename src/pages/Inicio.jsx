import { Input } from './../components/user/Input';
import { Nav } from './../components/user/Nav';

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
