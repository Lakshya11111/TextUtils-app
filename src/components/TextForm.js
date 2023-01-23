import React, { useState } from "react";
import './TextForm.css';



export default function TextForm(props) {
    // upper case
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!", "success");
    }

    // lower case
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!", "success");
    }

    // clear text
    const handleclearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared!", "success");
    }

    // copy text
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is copied to clipboard!", "success");
    }

    // Remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are cleared!", "success");
    }

    // Replace
    const handleReplace = () => {
        let newText = text.replace(repInput1, repInput2);
        setText(newText);
        props.showAlert("Word replaced!", "success");
    }

    // Replace All
    const handleReplaceAll = () => {
        let newText = text.replaceAll(repInput1, repInput2);
        setText(newText);
        props.showAlert("All word replaced!", "success");
    }

    // for enabe changing in text 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnChangeRep1 = (event) => {
        setInput1(event.target.value);
    }

    const handleOnChangeRep2 = (event) => {
        setInput2(event.target.value);
    }

    const [text, setText] = useState('');
    const [repInput1, setInput1] = useState('');
    const [repInput2, setInput2] = useState('');
    return (
        <>
            <div className="bg">
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <div className="mb-3">
                        <h1>{props.heading}</h1>
                        <textarea className="form-control my-3" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="mybox" rows="8" ></textarea>
                        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Upper case</button>
                        <button className="btn btn-primary mx-1 my-1" onClick={handleloClick} >Lower case</button>
                        <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick} >Clear text</button>
                        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button>
                        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove extra spaces</button>
                    </div>
                    <div className="container my=2 replace" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <input className="mx-2 replace1" type="text" placeholder="Enter word" value={repInput1} onChange={handleOnChangeRep1} name="replace" id="replace1" />
                        <p className="to my-2">To</p>
                        <input className="mx-1 replace1" type="text" placeholder="Replace to" onChange={handleOnChangeRep2} value={repInput2} name="replace" id="replace1" />
                        <div className="replacebtn">
                            <button className="btn btn-primary mx-1 my-2 btn-rep" onClick={handleReplace} >Replace</button>
                            <button className="btn btn-primary mx-1 my-2 btn-rep" onClick={handleReplaceAll} >Replace All</button>
                        </div>

                    </div>
                </div>
                <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2>Your text summary</h2>
                    <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p>
                    <p>{text===""?0:0.008 * text.split(" ").length} minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here..."}</p>
                </div>
            </div>
        </>
    );
}
