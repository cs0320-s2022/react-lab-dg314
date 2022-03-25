import React from 'react';

type TextBoxProps = {
    name: string,
    label: string,
    change: React.Dispatch<string>
};

function TextBox(props: TextBoxProps) {
    return (
        <div className="text_box">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} type="text" onChange={(e) => props.change(e.target.value)}/>
        </div>
    );
}

export default TextBox;