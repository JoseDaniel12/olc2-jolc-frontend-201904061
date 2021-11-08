import classes from './Welcome.module.css'
import { Link } from 'react-router-dom'


function Welcome() {
    return (
        <div className={classes.container}>
            <div>
                <h1>José Daniel Alvardo Fajardo</h1>
                <p className={classes.carnet}>-201904061-</p>
            </div>
            <div className={classes.segundoSeg}>
                <h1 className={classes.nombre}>JOLC</h1>
                <p className={classes.description}>
                    Un lenguaje de programacion inspirado en julia, para el curso de compiladores 2.
                    <br/>Universidad de Sancarlos de Guatemala -USAC-
                </p>
            </div>
            <Link  to='/desarollo' className={classes.comenzar} >Comnezar</Link>
        </div>
    )
}
    
export default Welcome