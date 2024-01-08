import "./PlayPage.css";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useLocation, useParams } from "react-router-dom";


const PlayPage = () => {
    const location=useLocation();
    const difficulty = location.search[1];
    return (
        <div className="PlayPage">
            <PageHeader title="Mathematician Frog"/>
            <h2>{difficulty}</h2>
        </div>
    );
}

export default PlayPage;