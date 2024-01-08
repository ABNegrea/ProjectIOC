import "./DifficultyButton.css";

const DifficultyButton = (props) => {
    return(
        <button 
            className={`DifficultyButton ${props.active ? 'selected' : ''}`}
            onClick={() => props.function(props.difficulty)}
        >
            {props.difficulty}x{props.difficulty}
        </button>
    );
}

export default DifficultyButton;