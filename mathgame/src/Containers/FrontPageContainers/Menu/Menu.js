import { useState } from "react";
import MenuButton from "../../../Components/MenuButton/MenuButton";
import DifficultyButtonsContainer from "../DifficultyButtonsContainer/DifficultyButtonsContainer";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate=useNavigate();
    const [selectedDifficulty,setSelectedDifficulty] = useState('4');
    
    const playOnClick = () => {

        navigate(`/play?${selectedDifficulty}`);
    }
    const leaderboardOnClick = () => navigate("/leaderboard");
    const selectDifficulty = (difficultySelected) => {
        setSelectedDifficulty(difficultySelected);
    }

    return (
        <div className="Menu">
            <MenuButton text="Play" function={playOnClick}/>
            <DifficultyButtonsContainer function={selectDifficulty}/>
            <MenuButton text="Leaderboard" function={leaderboardOnClick}/>
        </div>
    );
}

export default Menu;