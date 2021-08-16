import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Authentication} from './components/Authentication';
import { DateBirth } from './pages/DateBirth';
import { TableMessages } from './pages/TableMessages';
function App() {
  return (
    <div className="App">
      
        <Router>
          <div className="App-header">
            <Switch>
              <Route path="/"exact>
                <Authentication/>
              </Route>
              <Route path="/birthday">
                <DateBirth/>
              </Route>
              <Route path="/tableMessage">
                <TableMessages/>
              </Route>
            </Switch>
          </div>
        </Router>
        
      
    </div>
  );
}

export default App;
