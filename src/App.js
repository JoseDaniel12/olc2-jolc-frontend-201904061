import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout'
import DevelopmentArea from './pages/DevelopmentArea';
import TablaErrores from './pages/TablaErrores';
import TablaSimbolos from './pages/TablaSimbolos';
import ReporteOptimizacion from './pages/ReporteOptimizacion'
import Welcome from './pages/Welcome';
import Cst from './pages/Cst'

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Welcome/>
                </Route>
                <Route path='/desarollo' exact>
                    <DevelopmentArea/>
                </Route>
                <Route path='/simbolos' exact>
                    <TablaSimbolos/>
                </Route>
                <Route path='/errores' exact>
                    <TablaErrores/>
                </Route>
                <Route path='/reporteOptimizacion' exact>
                    <ReporteOptimizacion/>
                </Route>
                <Route path='/cst' exact>
                    <Cst/>
                </Route>
            </Switch>
        </Layout>
    )
}

export default App;