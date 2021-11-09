import Graph from "react-graph-vis";
import classes from "./Cst.module.css";
import React, { useState, useEffect } from 'react';
import compileRoot from "../Services/roots";

function Cst() {
    const [grafico, setGrafico] = useState({
        nodes: [],
        edges: []
    })

    useEffect(() => {
        let codigoExistente = localStorage.getItem('codigo')
        if (codigoExistente != null) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ entrada: codigoExistente})
              };
              fetch(compileRoot + "/cst",requestOptions)
              .then(res => res.json())
              .then(res => {
                setGrafico(res)
            })
        }
    }, []) 

    const options = {
        layout: {
            hierarchical: {
                sortMethod: "directed",
                levelSeparation: 80,
                shakeTowards: "roots"
            }
        },
        interaction: {dragNodes :false},
        physics: {
            enabled: false,
        },
        edges: {
            color: "whitesmoke"
        },
        height: "500px",
    };
    
  return (
      <div className={classes.marco}>
        <div className={classes.cabezera}>
            <p className={classes.alerta}>¡En caso de no ver disminuir el zoom!</p>
        </div>
        <Graph
        graph={grafico}
        options={options}
        />
      </div>
  );
}

export default Cst;