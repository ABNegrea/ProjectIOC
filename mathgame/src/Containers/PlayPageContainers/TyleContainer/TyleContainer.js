import "./TyleContainer.css";
import MatrixTyle from "../../../Components/MatrixTyle/MatrixTyle";
import { useState, useEffect, useImperativeHandle, forwardRef} from "react";

const TyleContainer = forwardRef((props,ref) => {
    const gridStyle = {
        display:'grid',
        gridTemplateColumns:`repeat(${parseInt(props.difficulty)}, 1fr)`,
        gap:'0'
    };

    const [tyles,setTyles] = useState([]);
    const [frogPosition,setFrogPosition]=useState([parseInt(props.difficulty/2),parseInt(props.difficulty/2)]);
    const [frogVisitedPositions,setVisitedPositions]=useState([[parseInt(props.difficulty/2),parseInt(props.difficulty/2)]])
    
    const reset = () => {
        setTyles([]);
        setFrogPosition([parseInt(props.difficulty/2),parseInt(props.difficulty/2)]);
        setVisitedPositions([[parseInt(props.difficulty/2),parseInt(props.difficulty/2)]]);
    }

    useImperativeHandle(ref, () => ({reset}));

    const moveFrog = (position,value) => {
        setVisitedPositions([...frogVisitedPositions,position])
        setFrogPosition(position);
        props.updateScore(value);
    }
    useEffect(() => {
        let list=[];
        props.matrix.forEach((line,indexi) => {
            line.forEach((tyle,indexj) => {
                list.push(
                <MatrixTyle
                visitedPositions={frogVisitedPositions}
                moveFrog={moveFrog}
                key={[indexi,indexj]}
                position={[indexi,indexj]}
                frogPosition={frogPosition}
                content={tyle} 
                heigth={50/props.difficulty}
                fontSize={30/props.difficulty}
                />)
            });
        });
        setTyles(list);
    },[frogPosition]);

    return (
        <div style={gridStyle} className="tylecontainer ocean">
                <div className="bubble bubble--1"></div>
                <div className="bubble bubble--2"></div>
                <div className="bubble bubble--3"></div>
                <div className="bubble bubble--4"></div>
                <div className="bubble bubble--5"></div>
                <div className="bubble bubble--6"></div>
                <div className="bubble bubble--7"></div>
                <div className="bubble bubble--8"></div>
                <div className="bubble bubble--9"></div>
                <div className="bubble bubble--10"></div>
                <div className="bubble bubble--11"></div>
                <div className="bubble bubble--12"></div>

            {tyles}
        </div>
    );
});

export default TyleContainer;