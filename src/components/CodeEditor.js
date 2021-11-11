import Editor from "@monaco-editor/react";
import classes from "./CodeEditor.module.css";

import basico from "../Services/archivos/basico";
import intermedio from "../Services/archivos/intermedio"
import funBasicas from "../Services/archivos/funBasicas"
import funRecursivas from "../Services/archivos/funRecursivas"
import arreglosUnaDim from "../Services/archivos/arreglosUnaDim"
import arreglosDosDim from "../Services/archivos/arreglosDosDim"
import arreglosTresDim from "../Services/archivos/arreglosTresDim"
import structActor from "../Services/archivos/structActor"
import structAbb from "../Services/archivos/structAbb"
import structAvl from "../Services/archivos/structAvl"

function CodeEditor(props) {

  function handleChange(value, event) {
    props.handleCodeCange(value)
  }

  function handleCargaArchivo(e) {
    props.handleCargaArchivo(e)
  }



  function handleOptionArchivo(event) {
    let opcion = event.target.value
    switch (opcion) {
      case "2":
        props.handleCodeCange(basico)
        break
      case "3":
        props.handleCodeCange(intermedio)
        break
      case "4":
        props.handleCodeCange(funBasicas)
        break
      case "5":
        props.handleCodeCange(funRecursivas)
        break
      case "6":
        props.handleCodeCange(arreglosUnaDim)
        break
      case "7":
        props.handleCodeCange(arreglosDosDim)
        break
      case "8":
        props.handleCodeCange(arreglosTresDim)
        break
      case "9":
        props.handleCodeCange(structActor)
        break
      case "10":
        props.handleCodeCange(structAbb)
        break
      case "11":
        props.handleCodeCange(structAvl)
        break
      default:
        alert("Ha ocurrido un error!")
    }
    event.target.value = 1
  }


  return (
    <div>
      <div className={classes.header}>
        <p className={classes.titulo}><b>Editor</b></p>
        <label className={classes.option} onChange={handleCargaArchivo}>
          <input className={classes.hide} type="file"/>
          Cargar Archivo
        </label>
        <select onChange={handleOptionArchivo}>
          <option value={1}>Cargar archivo de prueba</option>
          <option value={2}>Básicos</option>
          <option value={3}>Intermedios</option>
          <option value={4}>Funciones básicas</option>
          <option value={5}>Funciones Recursivas</option>
          <option value={6}>Arreglos de una dimensión</option>
          <option value={7}>Arreglos de dos dimensiones</option>
          <option value={8}>Arreglos de tres dimensiones</option>
          <option value={9}>Structs de Actores</option>
          <option value={10}>Struct de Arbol binario</option>
          <option value={11}>Struct de Arbol AVL</option>
        </select>
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
