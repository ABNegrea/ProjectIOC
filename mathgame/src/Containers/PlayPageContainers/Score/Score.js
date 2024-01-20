import "./Score.css"

const Score = (props) => {

    return (
        <div className="Score">
            <h5 className="h5">Calculul curent:</h5>
            <h4 id="currentString">{props.currentString}</h4>
            <h5 className="h5">Scor curent:</h5>
            <h4 id="currentScore">{props.currentScore}</h4>
            <button id="save" className="giveup" onClick={props.save}>Salveaza scorul</button>
            <button id="reload" className="giveup" onClick={props.reload}>Reincearca</button>
            <button id="giveup" className="giveup" onClick={props.retry}>Joc Nou</button>
        </div>
    );
}

export default Score;