function TablaErrores(props) {

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
            {props.errores.map((error, i) => 
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