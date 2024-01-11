import PageHeader from "../../Components/PageHeader/PageHeader";
import Menu from "../../Containers/FrontPageContainers/Menu/Menu";
import "./FrontPage.css";

const FrontPage = () => {
    return (
        <div className="FrontPage">
            <PageHeader title="Broasca matematiciana"/>
            <Menu/>
        </div>
    );
}

export default FrontPage;