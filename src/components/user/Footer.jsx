import '../../styles/footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className='container__centrar--contenido'>
                        <img className='container__centrar--contenido__logo' src="/logo transparente blanco.png" alt="no se puede ver" />
                    </div>
                        <div className='container__centrar--contenido__iconos container__centrar--contenido__iconos__container'>
                            <a href="#"><img src="/facebookIcon.svg" alt="no se puede ver" /></a>
                            <a href="#"><img src="/instagramIcon.svg" alt="no se puede ver" /></a>
                            <a href="#"><img src="/twitterIcon.svg" alt="no se puede ver" /></a>
                        </div>
                        <p className='container__paragraph'>Best in the city 2023. All rights reserved.</p>
                    
                </div>
            </div>
        </>
    )
}
