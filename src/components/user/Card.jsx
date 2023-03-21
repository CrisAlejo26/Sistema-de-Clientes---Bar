import '../../styles/card.css'

export const Card = () => {
    return (
        <div className="card">
            <img className='imagen' src='/public/fondo-pedidos.jpg' alt="Denim Jeans" style={{width: '100%'}}/>
            <div className='card__flex'>
                <h1 className='card__titulo'>Tailored Jeans</h1>
                <p className="price">$19.99</p>
                <p>Some text about the jeanssdfs dsfsdfs gdfgdf sfdsfsf</p>
                <div className='card__flex__buttons'>
                    <button className='button1'>
                        Ver
                    </button>
                    <button className='button2'>
                        Pedir
                    </button>
                </div>
            </div>
        </div>
    )
}
