import '../Css/Medic.css'

function Medic (props){
    const handleClick = () => {
        console.log("Hello world")
    }

    return(
    <div className="Medic " onClick={handleClick}>
            <h1>{props.data.apellido} {props.data.nombre}</h1>
            <h3>{props.data.profesion}</h3>
    </div>
    )    
}
export default Medic