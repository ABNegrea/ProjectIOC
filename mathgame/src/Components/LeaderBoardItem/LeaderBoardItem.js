import "./LeaderBoardItem.css"

const LeaderBoardItem = (props) => {
    return (
        <div className="item">
            <div className="name">
                <h2 className="itemtext">{props.name}</h2>
            </div>
            <div className="score">
                <h2 className="itemtext">{props.score}</h2>
            </div>
        </div>
    );
}

export default LeaderBoardItem;