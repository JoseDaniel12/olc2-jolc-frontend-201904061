import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout'
import DevelopmentArea from './pages/DevelopmentArea';
import TablaErrores from './pages/TablaErrores';
import TablaSimbolos from './pages/TablaSimbolos';
import Welcome from './pages/Welcome';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Welcome/>
                </Route>
                <Route path='/compilar' exact>
                    <DevelopmentArea/>
                </Route>
                <Route path='/simbolos' exact>
                    <TablaSimbolos/>
                </Route>
                <Route path='/errores' exact>
                    <TablaErrores/>
                </Route>
                <Route path='/cst' exact>
                    <DevelopmentArea/>
                </Route>
            </Switch>
        </Layout>
    )
}

export default App;