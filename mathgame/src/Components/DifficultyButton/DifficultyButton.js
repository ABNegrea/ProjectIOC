import "./DifficultyButton.css";

const DifficultyButton = (props) => {
    let dificultate=0;
    if (props.difficulty=="5") dificultate="Usor";
    if(props.difficulty=="7") dificultate="Mediu";
    if(props.difficulty=="9") dificultate="Greu";
    return(
        <button 
            className={`DifficultyButton ${props.active ? 'selected' : ''}`}
            onClick={() => props.function(props.difficulty)}
        >
            {dificultate}
        </button>
    );
}

export default DifficultyButton;