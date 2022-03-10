import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import Bond from './Pages/Bond/Bond';
import Stake from './Pages/Stake/Stake'
import Wrap from './Pages/Wrap/Wrap'


function App() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    AOS.init({
      offset: 0
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line no-lone-blocks
      { window.scrollY > 150 ? setScroll(true) : setScroll(false) }
    })
  }, [])

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      <button onClick={backToTop} className={`backToTop ${scroll === true ? "visible" : ""}`}>
        <i className="fa-solid fa-angle-up"></i>
      </button>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bond" element={<Bond />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/wrap" element={<Wrap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// reincarnate.io