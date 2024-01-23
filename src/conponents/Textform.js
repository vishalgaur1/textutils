import React, { useState } from 'react'

const bgColorMap = {
    dark:'#52529d',
    danger:'#db343c',
    success:'green'
  }

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text was converted to UPPER CASE", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text was converted to lower case", "success");
    }
    const handleClearText = () => {
        setText('')
        props.showAlert("Text was Cleared", "success");
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text was copied to Clipboard", "success");
    }
    const handleRmvExtTxt = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces from text has been removed", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div style={{ background: bgColorMap[props.mode], color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className='container' >
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? '#72729f' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleRmvExtTxt}>Remove Extra Spaces</button>
                </div>
                <div className="container my-3" >
                    <h2>Your Text Summary</h2>
                    <p>{text.split(" ").length} Words and {text.length} Characters</p>
                    <p>{Math.round(0.008 * text.split(" ").length * 100) / 100} Minutes to Read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}


// style={{ color: props.mode === 'dark' ? 'white' : 'black' }}



// style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}



// style={{ color: props.mode === 'dark' ? 'white' : 'black' }}



