import React, {useEffect, useState} from 'react'

import compileRoot from "../Services/roots";

function TablaSimbolos() {
    let [tablaSimbolos, setTablaSimbolos] = useState([])

    useEffect(() => {
        let codigoExistente = localStorage.getItem('codigo')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ entrada: codigoExistente})
          };
          fetch(compileRoot + "/simbolos",requestOptions)
          .then(res => res.json())
          .then(res => {
            setTablaSimbolos(res)
          })
    }, [])

    return (
        <table className="table table-dark">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Ambito</th>
            <th scope="col">Fila</th>
            <th scope="col">Columna</th>
            </tr>
        </thead>


        <tbody>
            {tablaSimbolos.map((simbolo, i) => 
                <tr key={simbolo.id}>
                    <td>{i + 1}</td>
                    <td>{simbolo.nombre}</td>
                    <td>{simbolo.tipo}</td>
                    <td>{simbolo.ambito}</td>
                    <td>{simbolo.fila}</td>
                    <td>{simbolo.columna}</td>
                </tr>
            )}
        </tbody>
        </table>
    )
}

export default TablaSimbolos