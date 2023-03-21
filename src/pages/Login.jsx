import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <>
            <div class="context">
                <div className="container__login">
                    <h2>Iniciar Sesión</h2>
                    <div className="container__input">
                        <div>
                            <label className="container__input--label" htmlFor="usuario" id="usuario">Nombre de Usuario</label>
                            <input id="usuario" placeholder="Usuario" type="text" name="usuario" className="input"/>
                        </div>
                        <div>
                            <label className="container__input--label" htmlFor="password" id="password">Contraseña</label>
                            <input id="password" placeholder="Contraseña" type="password" name="password" className="input"/>
                        </div>
                        <div className="container__input__buttons">
                        <Link className="container__input__buttons--ingresar" href="#">Ingresar</Link>
                            <Link href="#">
                                <div className="g-sign-in-button">
                                <div className="content-wrapper">
                                    <div className="logo-wrapper">
                                    <img src="https://developers.google.com/identity/images/g-logo.png"/>
                                    </div>
                                    <span className="text-container">
                                    <span>Sign in with Google</span>
                                    </span>
                                </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}
