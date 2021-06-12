import Header from './components/Header'
import Footer from './components/Footer'
import { HashRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
