import React,{useState} from 'react'


export const InputBox = ({onAdd}) => {
    const [text, setText] = useState("");

    const onClickHandler = () => {
        onAdd(text);
        setText("");
    };
    
    return (
        <div className="input-box">
            <input type="text" 
            value={text} 
            onChange={ (e)=> setText(e.target.value)}
            />
            <button onClick={onClickHandler}> POST </button>
        </div>
    );  
};
