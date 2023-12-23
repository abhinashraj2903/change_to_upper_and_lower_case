import React from "react";
import { useState } from "react";
function Form(props) {
    const[Text, setText] = useState("");
   const conUpperCase = () => {
       setText(Text.toUpperCase());
   }
    const conLowerCase = () => {
         setText(Text.toLowerCase());
    }
   const clickHandle = (event) => {
       console.log("clicked");
         setText(event.target.value)
   }
  return (
      <>
      <div className ="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}  >
    <div className="mb-3">
        <h1>{props.id}</h1>
        <textarea className="form-control" value={Text} onChange={clickHandle} style={{backgroundColor:props.mode === 'dark' ? '#042743' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}} id="exampleFormControlTextarea1" rows="8" ></textarea>
    </div>
          <button onClick={conUpperCase} className= "btn.btn-primary mx-1">Convert to Uppercase</button>
          <button onClick={conLowerCase} className= "btn.btn-primary mx-1">Convert to Lowercase</button>
      </div>

          <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your text summary</h1>
        <p>{Text.split(" ").filter((element) => {return element.length!=0}).length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
          </div>
            </>
  );
}
export default Form;