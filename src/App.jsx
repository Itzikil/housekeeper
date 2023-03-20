import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './views/Home';
import { Suppliers } from './views/Suppliers';
import { Items } from './views/Items';
import { Receiptes } from './views/Receiptes';
import './assets/scss/global.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className='main-container'>
          <Routes>
            <Route path="/suppliers" element={< Suppliers />} />
            <Route path="/receiptes" element={< Receiptes />} />
            <Route path="/items" element={< Items />} />
            <Route path="/" element={< Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
