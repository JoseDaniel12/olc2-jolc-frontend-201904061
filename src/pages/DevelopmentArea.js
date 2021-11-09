import CodeEditor from "../components/CodeEditor";
import Console from "../components/Console";
import classes from "./DevelopmentArea.module.css";
import React, { useState, useEffect } from 'react';

import compileRoot from "../Services/roots";


function DevelopmentArea(props) {
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

  function handleSalidaChange(salida) {
    setSalida(salida)
    localStorage.setItem("salida", salida)
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

  function handleCodigo3d() {
    if (codigo !== "") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entrada: codigo})
      };
      fetch(compileRoot + "/compilar3d",requestOptions)
      .then(res => res.json())
      .then(res => {
        setSalida(res)
        localStorage.setItem("salida", res)
      })
    }
  }

  function handleMirilla() {
    if (salida !== "") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entrada: salida})
      };
      fetch(compileRoot + "/optimizarMirilla",requestOptions)
      .then(res => res.json())
      .then(res => {
        setSalida(res.codigo)
        localStorage.setItem("salida", res.codigo)
        props.setOptimizaciones(res.optimizaciones)
        alert("Optimizacion por mirilla completada!!!")
      })
    }
  }

  function handleBloques() {
    if (salida !== "") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entrada: salida})
      };
      fetch(compileRoot + "/optimizarMirilla",requestOptions)
      .then(res => res.json())
      .then(res => {
        setSalida(res)
        localStorage.setItem("salida", res)
        alert("Optimizacion por bloques completada!!!")
      })
    }
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
        handleSalidaChange = {handleSalidaChange}
        handleCompile = {handleCompile}
        handleLimpiar = {handleLimpiar}
        handleCopy = {handleCopy}
        handleCodigo3d = {handleCodigo3d}
        handleMirilla = {handleMirilla}
        handleBloques = {handleBloques}
      />
    </div>
  );
}

export default DevelopmentArea;
