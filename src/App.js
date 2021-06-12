import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Skills from './components/Skills'
import About from './components/About'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import NoMatch from './components/NoMatch'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Projects} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/awards' component={Awards} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/resume' component={Resume} />
          <Route component={NoMatch} status={404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
