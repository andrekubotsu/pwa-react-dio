import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path='/'>
              <div>post</div>
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  )
}

export default App;
