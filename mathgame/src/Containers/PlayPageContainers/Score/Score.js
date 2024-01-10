import "./Score.css"

const Score = (props) => {

    return (
        <div className="Score">
            <h5 className="h5">Target:</h5>
            <h4 id="target">{props.target}</h4>
            <h5 className="h5">Current sum:</h5>
            <h4 id="currentSum">{props.currentSum}</h4>
            <h5 className="h5">Current string:</h5>
            <h4 id="currentString">{props.currentString}</h4>
            <h5 className="h5">Current score:</h5>
            <h4 id="currentScore">{props.currentScore}</h4>
            <button id="giveup" className="giveup" onClick={props.lostGame}>Save Score/ Retry</button>
        </div>
    );
}

export default Score;