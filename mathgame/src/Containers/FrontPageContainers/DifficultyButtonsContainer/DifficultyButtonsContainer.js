import DifficultyButton from "../../../Components/DifficultyButton/DifficultyButton";
import "./DifficultyButtonsContainer.css";
import {useState} from 'react';

const DifficultyButtonsContainer = (props) => {
    const [activeButton, setActiveButton] = useState('5');
    const setDifficulty = (difficultySelected) => {
        setActiveButton(difficultySelected);
        props.function(difficultySelected);
    }
    return (
        <div className="DifficultyButtonsContainer">
            <h4 className="selectdiff">Alege dificultatea</h4>
            <DifficultyButton difficulty="5" function={setDifficulty} active={activeButton==='5'}/>
            <DifficultyButton difficulty="7" function={setDifficulty} active={activeButton==='7'}/>
            <DifficultyButton difficulty="9" function={setDifficulty} active={activeButton==='9'}/>
        </div>
    )
}

export default DifficultyButtonsContainer;