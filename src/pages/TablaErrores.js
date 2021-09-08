import React, {useEffect, useState} from 'react'

function TablaErrores() {

    let [tablaErrores, setTablaErrores] = useState([])
    useEffect(() => {
        let resCompilado = localStorage.getItem('resCompilado')
        if (resCompilado != null) {
            setTablaErrores(JSON.parse(resCompilado).tablaErrores)
        }
    }, [])

    return (
        <table class="table table-dark">
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
            {tablaErrores.map((error) => 
                <tr>
                    <th scope="row">1</th>
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