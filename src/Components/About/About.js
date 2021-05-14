/*Components*/
import Medic from './Medic'

/* Css */
import '../Css/About.css'

/*Data*/
import MedicData from '../../Data/MedicData.js'

function About () {
    const MedicsComponents = MedicData.map(medic => <Medic key={medic.id} data={medic}/>)

    return(
        <div className="About">
            <p>Profesionales que trabajan en Quorum</p>
            {MedicsComponents}
        </div>
    )
}

export default About