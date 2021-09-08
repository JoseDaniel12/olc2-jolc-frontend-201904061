import React, {useEffect, useState} from 'react'

function TablaSimbolos() {

    let [tablaSimbolos, setTablaSimbolos] = useState([])
    useEffect(() => {
        let resCompilado = localStorage.getItem('resCompilado')
        if (resCompilado != null) {
            setTablaSimbolos(JSON.parse(resCompilado).tablaSimbolos)
        }
    }, [])

    return (
        <table class="table table-dark">
        <thead >
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Ambito</th>
            <th scope="col">Fila</th>
            <th scope="col">Columna</th>
            </tr>
        </thead>


        <tbody>
            {tablaSimbolos.map((simbolo) => 
                <tr>
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