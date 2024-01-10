import "./LeaderBoard.css";
import LeaderBoardItem from "../../../Components/LeaderBoardItem/LeaderBoardItem";
import { useEffect, useState } from "react";

const LeaderBoard = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const storedItems = localStorage.getItem('leaderboard');
        if(storedItems) {
            const parsedItems=JSON.parse(storedItems);
            setItems(parsedItems.sort((a,b) => b.score-a.score).map(item => 
                <LeaderBoardItem name={item.name} score={item.score}/>    
            ));
        } else {
            setItems([<h1 className="EmptyLeaderboard">Leaderboard is empty</h1>])
        }
    },[]);
    return (
        <div className="leaderboard">
            {items}
        </div>
    );
}

export default LeaderBoard;