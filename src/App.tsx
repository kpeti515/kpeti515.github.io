import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';

function App() {
  const routeComponents = routes.map(({ path, component, exact }, key) => (
    <Route
      path={path}
      component={component}
      exact={exact}
      key={key}
    />
  ));

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <main>
          <Switch>{routeComponents}</Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
