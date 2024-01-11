import "./Score.css"

const Score = (props) => {

    return (
        <div className="Score">
            <h5 className="h5">Tinta:</h5>
            <h4 id="target">{props.target}</h4>
            <h5 className="h5">Suma curenta:</h5>
            <h4 id="currentSum">{props.currentSum}</h4>
            <h5 className="h5">Calculul curent:</h5>
            <h4 id="currentString">{props.currentString}</h4>
            <h5 className="h5">Scorul curent:</h5>
            <h4 id="currentScore">{props.currentScore}</h4>
            <button id="save" className="giveup" onClick={props.save}>Salveaza scorul</button>
            <button id="giveup" className="giveup" onClick={props.retry}>Reincearca</button>
        </div>
    );
}

export default Score;