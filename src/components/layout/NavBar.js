import { Link } from 'react-router-dom'
import classes from "./Navbar.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to='/'><b className={classes.hola}>JOLC</b></Link>
          </li>
          <li>
            <Link to='/compilar'>Desarollo</Link>
          </li>                    
          <li>
            <Link to='/simbolos'>Simbolos</Link>
          </li>
          <li>
            <Link to='/errores'>Errores</Link>
          </li>
          <li>  
            <Link to='/cst'>CST</Link>
          </li>
          <li>  
            <Link to='/reporteOptimizacion'>Reporte Optimizacion</Link>
          </li>
          <li>  
            <a href='https://play.golang.org/' target="_blanck">Compilar codigo 3D</a>
          </li>
          <li>  
            <a href='https://manuelmiranda99.github.io/Analizador_C3D/' target="_blanck">Validar codigo 3D</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
