import classes from "./ReporteOptimizacion.module.css"

function ReporteOptimizacion(props) {

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
                {props.optimizaciones.map((optimizacion, i) => 
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