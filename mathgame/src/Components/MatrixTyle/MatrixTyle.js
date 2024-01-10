import { generatePath } from "react-router-dom";
import "./MatrixTyle.css";

const MatrixTyle = (props) => {
    const size = {
        height:`${props.heigth}vh`
    };
    const font_size = {
        fontSize:`${props.fontSize}vh`
    };
    const disabledStyle = {
        cursor:'auto',
    }
    const checkVisited = () => {
        for(let i=0;i<props.visitedPositions.length-2;i++) {
            if(props.visitedPositions[i].toString()==props.position.toString())
                return true;
        };
        return false;
    }
    const checkIfPossible = () => {
        const tyleIndexI=props.position[0];
        const tyleIndexJ=props.position[1];
        const frogPositionI=props.frogPosition[0];
        const frogPositionJ=props.frogPosition[1];;
        const diff = frogPositionI-tyleIndexI+frogPositionJ-tyleIndexJ;
        if (
            (tyleIndexI==frogPositionI-1 && tyleIndexJ==frogPositionJ ||
            tyleIndexI==frogPositionI+1 && tyleIndexJ==frogPositionJ ||
            tyleIndexI==frogPositionI && tyleIndexJ==frogPositionJ-1 ||
            tyleIndexI==frogPositionI && tyleIndexJ==frogPositionJ+1
            ) && !checkVisited()
        )
            return true;
        return false;
    }

    const checkIfFrogOn = () => {
        if(props.position.toString()==props.frogPosition.toString())
            return true;
        return false;
    }

    const moveFrog = () => {
        if(checkIfPossible()) {
            props.moveFrog(props.position,props.content);
        }
    }
    const checkLastVisited = () => {
        if(props.visitedPositions.length>1) {
            if(props.visitedPositions[props.visitedPositions.length-2].toString()==props.position.toString())
                return true;
            return false;
        }
        return false;
    }
    checkLastVisited();
    return (
        <div style={size} 
            className={
                `tyle 
                ${checkIfPossible() ? 'possible' : ''}
                ${checkVisited() ? 'frogOld': ''}
                ${checkLastVisited() ? 'hidden': ''}
                `}>
            <button 
                onClick={moveFrog}
                className={`tylebutton ${checkIfFrogOn() ? 'frog' : ''}`}
                style={checkIfPossible() ? {...font_size} : {...font_size,...disabledStyle}}
            >
                <div className="content">{props.content}</div>    
            </button>
        </div>
    );
}

export default MatrixTyle;