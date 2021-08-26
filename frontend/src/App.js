import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import Dashboard from './components/dashboard/dashboard';

import RutaPrivada from './components/rutas/RutaPrivada';

function App() {
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <RutaPrivada exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
