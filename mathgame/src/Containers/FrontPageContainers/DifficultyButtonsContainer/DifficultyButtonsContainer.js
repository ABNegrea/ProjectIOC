import DifficultyButton from "../../../Components/DifficultyButton/DifficultyButton";
import "./DifficultyButtonsContainer.css";
import {useState} from 'react';

const DifficultyButtonsContainer = (props) => {
    const [activeButton, setActiveButton] = useState('4');
    const setDifficulty = (difficultySelected) => {
        setActiveButton(difficultySelected);
        props.function(difficultySelected);
    }
    return (
        <div className="DifficultyButtonsContainer">
            <h4>Select Difficulty</h4>
            <DifficultyButton difficulty="4" function={setDifficulty} active={activeButton==='4'}/>
            <DifficultyButton difficulty="5" function={setDifficulty} active={activeButton==='5'}/>
            <DifficultyButton difficulty="6" function={setDifficulty} active={activeButton==='6'}/>
        </div>
    )
}

export default DifficultyButtonsContainer;