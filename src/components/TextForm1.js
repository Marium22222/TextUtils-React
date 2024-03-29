import React,{useState} from 'react'
export default function TextForm1(props){
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
        
    }
    const handleUpClick=()=>{
        console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleLoClick=()=>{
        console.log("lower case was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    // const handleReverse=()=>{
    
    // }
    // const handleTitleCase=()=>{
    //     let newText=
    // }
    const [text,setText]=useState("");
    return(
<>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} placeholder='Enter your text' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle extraspaces</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h1>Your Text summary</h1>
<p>{text.split(" ").length-1} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length-0.008} minutes read</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here!"}</p>
        </div>
        </>
    )
}
