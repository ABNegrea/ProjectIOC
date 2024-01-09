import "./LeaderBoard.css";
import LeaderBoardItem from "../../../Components/LeaderBoardItem/LeaderBoardItem";
import { useEffect, useState } from "react";

const LeaderBoard = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const storedItems = localStorage.getItem('leaderboard');
        if(storedItems) {
            const parsedItems=JSON.parse(storedItems);
            console.log(parsedItems)
            setItems(parsedItems.map(item => 
                <LeaderBoardItem name={item.name} score={item.score}/>    
            ));
        }
    },[]);
    return (
        <div className="leaderboard">
            {items}
        </div>
    );
}

export default LeaderBoard;