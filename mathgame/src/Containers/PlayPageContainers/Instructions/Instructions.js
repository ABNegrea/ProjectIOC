import "./Instructions.css";

const Instructions = () => {
    return (
        <div className="Instructions">
            <h3>Modul de joaca</h3>
            <p>Tinta este rezultatul la care broscuta trebuie sa ajunga</p>
            <p>Pentru a sari pe nuferi broscuta se poate deplasa sus,jos,stanga si dreapta, dar nu si pe diagonala, folosind click.</p>
            <p>Un nufar se poate folosi o singura data.</p>
            <p>Daca te-ai blocat apasa pe reincearca, resetandu-ti scorul</p>
            <p>Daca vrei sa  salvezi scorul inainte sa il resetezi apasa pe salveaza scor</p>
        </div>
    );
}

export default Instructions;