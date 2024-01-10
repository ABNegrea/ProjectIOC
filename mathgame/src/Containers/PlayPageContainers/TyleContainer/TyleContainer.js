import "./TyleContainer.css";
import MatrixTyle from "../../../Components/MatrixTyle/MatrixTyle";
import { useState, useEffect } from "react";

const TyleContainer = (props) => {
    const gridStyle = {
        display:'grid',
        gridTemplateColumns:`repeat(${parseInt(props.difficulty)}, 1fr)`,
        gap:'0'
    };

    const [tyles,setTyles] = useState([])

    useEffect(() => {
        let list=[];
        props.matrix.forEach(line => {
            line.forEach(tyle => {
                list.push(
                <MatrixTyle 
                content={tyle} 
                heigth={50/props.difficulty}
                fontSize={30/props.difficulty}
                />)
            });
        });
        setTyles(list);
    },[]);

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
}

export default TyleContainer;