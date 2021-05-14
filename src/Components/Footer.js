import './Css/Footer.css'
import Github from '../Media/Img/Github.png'
import LinkedIn from '../Media/Img/Linkedin.png'
import Gmail from '../Media/Img/Gmail.png'

function Footer() {
    return(
        <footer>
            <p>Hecho por <a href="#">Franco Ledesma</a> con ❤️️ y ☕</p>
            <div>
                <a href="#"><img src={Github} alt="Github"/></a>
                <a href="#"><img src={LinkedIn} alt="LinkedIn"/></a>
                <a href="#"><img src={Gmail} alt="Gmail"/></a>
            </div>
        </footer>
    )
}

export default Footer