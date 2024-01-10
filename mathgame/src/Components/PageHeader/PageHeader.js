import "./PageHeader.css"
import homeIcon from './home.png';
import {useNavigate} from 'react-router-dom';
const PageHeader = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="PageHeader">
            <h1 className="title">{props.title}</h1>
                <button 
                className="imageButton"
                onClick={handleClick}>
                    <img 
                    src={homeIcon} 
                    alt="home" 
                    className="image"/>
                </button>
        </div>
    );
}

export default PageHeader;