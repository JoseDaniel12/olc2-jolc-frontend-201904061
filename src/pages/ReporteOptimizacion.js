import React, {useEffect, useState} from 'react'

import compileRoot from "../Services/roots";
import classes from "./ReporteOptimizacion.module.css"

function ReporteOptimizacion() {

    let [optimizaciones, setOptimizaciones] = useState([])
    useEffect(() => {
        let codigoExistente = localStorage.getItem('salida')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ entrada: codigoExistente})
          };
          fetch(compileRoot + "/reporteOptimizacion",requestOptions)
          .then(res => res.json())
          .then(res => {
            setOptimizaciones(res)
            alert(res)
            console.log(res)
          })
    }, [])

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">No.</th>
                <th scope="col">Tipo de Optimizacion</th>
                <th scope="col">Regla</th>
                <th scope="col">Codigo original</th>
                <th scope="col">Código optimizado</th>
                <th scope="col">Fila</th>
                </tr>
            </thead>


            <tbody>
                {optimizaciones.map((optimizacion, i) => 
                    <tr key={optimizacion.key}>
                        <th scope="row">{i + 1}</th>
                        <td>{optimizacion.tipo}</td>
                        <td>{optimizacion.regla}</td>
                        <td className={classes.saltos}>{optimizacion.codOriginal}</td>
                        <td className={classes.saltos}>{optimizacion.codOptimizado}</td>
                        <td>{optimizacion.linea}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ReporteOptimizacion