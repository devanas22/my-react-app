import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = ()=> {console.log(
        "on change")
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value);
    }
        const handleUpclick = ()=>{
            console.log ("upper case was clicked");
            let newText = text.toLocaleUpperCase ();
            setText(newText)
        }
    const [text, setText] = useState('');
  return (
   <>
   <div>
        <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="7"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpclick}>convert to uppercase</button>
    </div>
    <div className="conatainer my-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} is the expected time to read the above text </p>
    </div>
  </>)
}
