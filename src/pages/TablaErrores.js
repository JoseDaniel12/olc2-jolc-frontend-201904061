import React, {useEffect, useState} from 'react'

import compileRoot from "../Services/roots";

function TablaErrores() {

    let [tablaErrores, setTablaErrores] = useState([])
    useEffect(() => {
        let codigoExistente = localStorage.getItem('codigo')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ entrada: codigoExistente})
          };
          fetch(compileRoot + "/errores",requestOptions)
          .then(res => res.json())
          .then(res => {
            setTablaErrores(res)
          })
    }, [])

    return (
        <table className="table table-dark">
        <thead >
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Descripción</th>
            <th scope="col">Linea</th>
            <th scope="col">Columna</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            </tr>
        </thead>


        <tbody>
            {tablaErrores.map((error, i) => 
                <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{error.descripcion}</td>
                    <td>{error.linea}</td>
                    <td>{error.columna}</td>
                    <td>{error.fecha}</td>
                    <td>{error.hora}</td>
                </tr>
            )}
        </tbody>
        </table>
    )
}

export default TablaErrores