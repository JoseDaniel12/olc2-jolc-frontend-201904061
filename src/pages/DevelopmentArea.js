import CodeEditor from "../components/CodeEditor";
import Console from "../components/Console";
import classes from "./DevelopmentArea.module.css";
import React, { useState, useEffect } from 'react';

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
    if (codigo !== "") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entrada: codigo})
      };
      fetch(compileRoot + "/compilar",requestOptions)
      .then(res => res.json())
      .then(res => {
        setSalida(res)
        localStorage.setItem("salida", res)
      })
    } else {
      setSalida("")
      localStorage.setItem("salida", "")
    }
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
