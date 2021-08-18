import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DateBirth } from './pages/DateBirth';
import { Principal } from './pages/Principal';
import { NoteTable } from './pages/NoteTable';
function App() {
  return (
    <div className="App">
      <Router>
        <div >
          <Switch>
            <Route path="/" exact>
              <Principal />
            </Route>
            <Route path="/birthday">
              <DateBirth />
            </Route>
            <Route path="/noteTable">
              <NoteTable />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
