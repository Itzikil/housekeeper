import { HashRouter as Router, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './views/Home';
import { Suppliers } from './views/Suppliers';
import { Items } from './views/Items';
import { Receiptes } from './views/Receiptes';
import './assets/scss/global.scss';
import { i18Service } from './services/i18n-service';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    translate()
  }, [])

  const translate = () => {
    i18Service.setLang()
    i18Service.doTrans()
  }

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className='main-container'>
          <Routes>
            <Route path="/suppliers" element={< Suppliers />}/>
            <Route path="/receiptes" element={< Receiptes />} />
            <Route path="/items" element={< Items />} />
            <Route path="/" element={< Home  translate={translate}/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
