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
                direction: "UD",
                sortMethod: "directed",
                nodeSpacing: 80,
                levelSeparation: 80
            }
        },
        interaction: {dragNodes :false},
        physics: {
            enabled: false
        },
        edges: {
            color: "whitesmoke"
        },
        height: "500px",
    };
    

    const grafico2 = {
        nodes: [
            { id: 1, label: "Node 1" },
            { id: 2, label: "Node 2" },
            { id: 3, label: "Node 3", },
            { id: 4, label: "Node 4"},
            { id: 5, label: "Node 5" }
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
        ]
    };

  return (
      <div className={classes.marco}>
        <Graph
        graph={grafico}
        options={options}
        />
      </div>
  );
}

export default Cst;