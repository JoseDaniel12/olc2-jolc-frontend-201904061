import Editor from "@monaco-editor/react";
import classes from "./Console.module.css";

function Console(props) {
  function handleChange(value, event) {
    props.handleSalidaChange(value)
  }

  function handleOptimizationOption(event) {
    let opcion = event.target.value
    if (opcion === "Mirilla") {
      props.handleMirilla()
    } else if (opcion === "Bloques") {
      props.handleBloques()
    } else if (opcion === "MirillaBloques") {
      props.handleMirillaBloques()
    }
    event.target.value = "None"
  }

  return (
    <div>
       <div className={classes.header}>
        <p className={classes.titulo}><b>Consola</b></p>
        <button onClick={props.handleLimpiar}>Limpiar</button>
        <button onClick={props.handleCopy}>Copiar</button>
        <select id="optimizaciones" onChange={handleOptimizationOption}>
          <option value="None">Optimizar</option>
          <option value="Mirilla">Por Mirilla</option>
          <option value="Bloques">Por Bloques</option>
          <option value="MirillaBloques">Por Ambos</option>
        </select>
        <button onClick={props.handleCodigo3d}>Codigo 3D</button>
        <button onClick={props.handleCompile}>Interpretar</button>
      </div>

      <div  className={classes.codeEditorContainer}>
        <Editor 
          theme="vs-dark" 
          defaultLanguage="go" 
          onChange = {handleChange}
          value  = {props.text}
          options={{
            readOnly: false,
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Console;
