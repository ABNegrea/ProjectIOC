import "./LeaderBoardPage.css";
import PageHeader from "../../Components/PageHeader/PageHeader";
import LeaderBoard from "../../Containers/LeaderBoardContainers/LeaderBoard/LeaderBoard";
const LeaderBoardPage = () => {
    return (
        <div className="LeaderBoardPage">
            <PageHeader title="Clasament"/>
            <LeaderBoard/>
        </div>
    );
}

export default LeaderBoardPage;