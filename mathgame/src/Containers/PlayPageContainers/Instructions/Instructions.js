import "./Instructions.css";
import { useState } from "react";

const Instructions = () => {
    const [isExpanded, setExpanded] = useState(false);

    const handleButtonClick = () => {
      setExpanded(!isExpanded);
    };


    return (
        <div className="help">
            <button onClick={handleButtonClick} style={{cursor:'pointer'}} id="instructionsButton">
                {isExpanded ? 'Inchide Instructiuni' : 'Instructiuni'}
            </button>
            {isExpanded && (
                <div className="Instructions">
                    <h3>Modul de joaca</h3>
                    <p>Tinta este rezultatul la care broscuta trebuie sa ajunga</p>
                    <p>Pentru a sari pe nuferi broscuta se poate deplasa sus,jos,stanga si dreapta, dar nu si pe diagonala, folosind click.</p>
                    <p>Un nufar se poate folosi o singura data.</p>
                    <p>Daca te-ai blocat apasa pe reincearca, insa aceasta actiune te va costa puncte din scor</p>
                    <p>Daca vrei sa salvezi scorul inainte sa il resetezi apasa pe salveaza scor</p>
                    <p>Pentru a genera o noua tabla apasa Joc Nou. Aceasta actiune iti va reseta scorul la 0</p>
                </div>
            )}
        </div>
    );
}

export default Instructions;