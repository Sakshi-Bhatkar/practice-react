import React, {useState} from 'react';

//{/*Uppercase*/}
export default function TextForm(props) {
  const handleUpClick= ()=> {
    //console.log("Uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  //{/*Lowercase*/}
  const handlelowClick= ()=> {
    //console.log("Lowercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText);
  }
  //onChange handler
  const handleOnChange= (event)=> {
    console.log("On change");
    setText(event.target.value);
  }
  //Mail box
  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
       <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handlelowClick}>Convert to LowerCase</button>

    </div>
    {/*word count*/}
    <div className="container my-3">
        <h2>Text Count</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>

  );
}
