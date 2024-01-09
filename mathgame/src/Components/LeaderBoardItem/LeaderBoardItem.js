import "./LeaderBoardItem.css"

const LeaderBoardItem = (props) => {
    return (
        <div className="item">
            <div className="name">
                <h2>{props.name}</h2>
            </div>
            <div className="score">
                <h2>{props.score}</h2>
            </div>
        </div>
    );
}

export default LeaderBoardItem;