import "./MenuButton.css";

const MenuButton = (props) => {
    return(
        <button 
            className="MenuButton"
            onClick={props.function}
        >
            {props.text}    
        </button>
    );
}

export default MenuButton;