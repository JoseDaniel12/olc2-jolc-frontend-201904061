import Editor from "@monaco-editor/react";
import classes from "./CodeEditor.module.css";

function CodeEditor(props) {

  function handleChange(value, event) {
    props.handleCodeCange(value)
  }

  return (
    <div>
      <div className={classes.header}>
        <p>Editor</p>
      </div>
      <div className={classes.codeEditorContainer}>
          <Editor 
            theme="vs-dark" 
            defaultLanguage="julia" 
            onChange = { handleChange }
            value  = {props.text}
            readOnly = {false}
          />
      </div>
    </div>
  );
}

export default CodeEditor;
