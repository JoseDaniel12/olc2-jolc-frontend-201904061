function TablaSimbolos(props) {
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
            {props.simbolos.map((simbolo, i) => 
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