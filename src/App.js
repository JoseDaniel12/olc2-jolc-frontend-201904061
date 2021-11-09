import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout'
import DevelopmentArea from './pages/DevelopmentArea';
import TablaErrores from './pages/TablaErrores';
import TablaSimbolos from './pages/TablaSimbolos';
import ReporteOptimizacion from './pages/ReporteOptimizacion'
import Welcome from './pages/Welcome';
import Cst from './pages/Cst'

import React, { useState } from 'react';

function App() {
    const [optimizaciones, setOptimizaciones] = useState([])
    const [simbolos, setSimbolos] = useState([])
    const [errores, setErrores] = useState([])

    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Welcome/>
                </Route>
                <Route path='/desarollo' exact>
                    <DevelopmentArea
                        setOptimizaciones = {setOptimizaciones}
                        setSimbolos = {setSimbolos}
                        setErrores = {setErrores}
                    />
                </Route>
                <Route path='/simbolos' exact>
                    <TablaSimbolos
                        simbolos = {simbolos}
                    />
                </Route>
                <Route path='/errores' exact>
                    <TablaErrores
                        errores = {errores}
                    />
                </Route>
                <Route path='/reporteOptimizacion' exact>
                    <ReporteOptimizacion
                        optimizaciones = {optimizaciones}
                    />
                </Route>
                <Route path='/cst' exact>
                    <Cst/>
                </Route>
            </Switch>
        </Layout>
    )
}

export default App;