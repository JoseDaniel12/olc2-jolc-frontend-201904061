import Editor from "@monaco-editor/react";
import classes from "./CodeEditor.module.css";

function CodeEditor(props) {

  function handleChange(value, event) {
    props.handleCodeCange(value)
  }

  function handleCargaArchivo(e) {
    props.handleCargaArchivo(e)
  }


  return (
    <div>
      <div className={classes.header}>
        <p className={classes.titulo}><b>Editor</b></p>
            <label className={classes.option} onChange={handleCargaArchivo}>
              <input className={classes.hide} type="file"/>
              Cargar Archivo
            </label>
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
