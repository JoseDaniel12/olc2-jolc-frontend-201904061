import Editor from "@monaco-editor/react";
import classes from "./Console.module.css";

function Console(props) {
  return (
    <div>
       <div className={classes.header}>
        <p>Consola</p>
        <button onClick={props.handleCompile}>Compilar</button>
        <button onClick={props.handleLimpiar}>Limpiar</button>
        <button onClick={props.handleCopy}>Copiar</button>
      </div>
    
      <div  className={classes.codeEditorContainer}>
      <Editor 
            theme="vs-dark" 
            defaultLanguage="Text" 
            value  = {props.text}
            readOnly = {true}
          />
      </div>
    </div>
  );
}

export default Console;
