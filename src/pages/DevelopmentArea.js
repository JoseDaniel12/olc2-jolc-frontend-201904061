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
    }
  }

  function handleLimpiar() {
      setSalida("")
      localStorage.setItem("salida", "")
  }

  function handleCopy() {
    navigator.clipboard.writeText(salida)
  }

  function handleCargaArchivo(event) {
    let archivo = event.target.files[0]
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = reader.result.toString().trim();
        setCodigo(text)
        localStorage.setItem("codigo", text)
        event.target.value = null;
    }
    reader.readAsText(archivo);

  }

  return (
    <div className={classes.developementAreaContainer}>
      <CodeEditor 
        text = {codigo}
        handleCodeCange = {handleCodeCange}
        handleCargaArchivo = {handleCargaArchivo}
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
