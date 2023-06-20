import { TextFormProps } from "./types";
import { useState } from "react";

const Textform = (props: TextFormProps) => {
  const [text, setText] = useState("");
  const handleUpperCaseClick = () => {
    if(text.length == 0)
      props.showAlert('Please enter some text first', 'warning')
    else{
      setText(text.toUpperCase());
      props.showAlert('Converted to Uppercase', 'success');
    }
  };
  const handleLowerCaseClick = () => {
    if(text.length == 0)
      props.showAlert('Please enter some text first', 'warning')
    else{
      setText(text.toLowerCase());
      props.showAlert('Converted to Lowercase', 'success');
    }
  };
  const handleClearClick = () => {
    if(text.length == 0)
      props.showAlert('Please enter some text first', 'warning')
    else{
      setText("");
      props.showAlert('Text Cleared', 'success');
    }
  };
  const handleCopyClick = async () => {
    if(text.length == 0)
      props.showAlert('Please enter some text first', 'warning')
    else{
      await navigator.clipboard.writeText(text);
      props.showAlert('Text Copied to Clipboard', 'success');
    }
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <div
      className="container my-4"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="myTextBox"
          rows={10}
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "white" : "#3a3b59",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
        Copy Text
      </button>
      <div className="container">
        <h1 className="my-3">Your Text Summary</h1>
        <p>
          {text.split(" ").filter((x) => x != "").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {(0.008 * text.split(" ").filter((x) => x != "").length).toFixed(3)}{" "}
          Minutes Read
        </p>
      </div>
    </div>
  );
};

export default Textform;
