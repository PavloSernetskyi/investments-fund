import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddInvestment from './investments/AddInvestment';
import InvestmentSummary from './pages/InvestmentsSummary';

function App() {
  return (
    <div className="App">
     <Router >
      <Navbar />

     <Routes>
      <Route exact path = "/" element={<Home/>  } />
      <Route exact path = "/addinvestment" element={<AddInvestment/>} />
      <Route path="/investment-summary" element={<InvestmentSummary />} />
     </Routes>
      </Router>
    </div>
  );
}

export default App;
