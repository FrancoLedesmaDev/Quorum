import './Css/Header.css'
import logo from '../Media/Img/Logo.png'

function Header () {
    return(
        <header>
            <a href="#"><img src={logo} alt="Logo"/></a>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Turnos</a></li>
            </ul>
        </header>
    )
}

export default Header