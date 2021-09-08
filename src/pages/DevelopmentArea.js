import CodeEditor from "../components/CodeEditor";
import Console from "../components/Console";
import classes from "./DevelopmentArea.module.css";
import React, { useState, useEffect, useRef } from 'react';

import compileRoot from "../Services/roots";


function DevelopmentArea() {
  const [codigo, setCodigo] = useState("")
  const [salida, setSalida] = useState("")

  useEffect(() => {
    let codigoExistente = localStorage.getItem("codigo") 
    if (codigoExistente != null) {
      setCodigo(codigoExistente)
    }
    let salidaExistente = localStorage.getItem("salida")
    if (salidaExistente != null) {
      setSalida(salidaExistente)
    }
  }, [])  


  function handleCodeCange(codigo) {
    setCodigo(codigo)
    localStorage.setItem("codigo", codigo)
  }


  function handleCompile() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entrada: codigo})
    };
    fetch(compileRoot,requestOptions)
    .then(res => res.json())
    .then(res => {
      setSalida(res.textoSalida)
      localStorage.setItem("salida", res.textoSalida)
      localStorage.setItem("resCompilado", JSON.stringify(res))
    })
  }

  function handleLimpiar() {
      setSalida("")
      localStorage.setItem("salida", "")
  }

  function handleCopy() {
    navigator.clipboard.writeText(salida)
  }

  return (
    <div className={classes.developementAreaContainer}>
      <CodeEditor 
        text = {codigo}
        handleCodeCange = {handleCodeCange}
      />
      <Console 
        text  = {salida}
        handleCompile = {handleCompile}
        handleLimpiar = {handleLimpiar}
        handleCopy = {handleCopy}
      />
    </div>
  );
}

export default DevelopmentArea;
