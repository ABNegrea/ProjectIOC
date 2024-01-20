import "./Target.css";

const Target = (props) => {
    return (
        <div className="targetDiv">
            <h5 className="targeth5">Tinta:</h5>
            <h4 className="targetNumb" id="target">{props.target}</h4>
            <h5 className="targeth5">Suma curenta:</h5>
            <h4 className="targetNumb" id="currentSum">{props.currentSum}</h4>
        </div>
    );
}

export default Target;