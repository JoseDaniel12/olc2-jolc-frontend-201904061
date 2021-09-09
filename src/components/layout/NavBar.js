import { Link } from 'react-router-dom'
import classes from "./Navbar.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to='/'><b>JOLC</b></Link>
          </li>
          <li>
            <Link to='/compilar'>Compilador</Link>
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
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
