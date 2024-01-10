import "./MatrixTyle.css";

const MatrixTyle = (props) => {
    const size = {
        height:`${props.heigth}vh`
    };
    const font_size = {
        fontSize:`${props.fontSize}vh`
    }
    return (
        <div style={size} className="tyle">
            <button 
                className="tylebutton"
                style={font_size}
            >
                <div className="content">{props.content}</div>    
            </button>
        </div>
    );
}

export default MatrixTyle;