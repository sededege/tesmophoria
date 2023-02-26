import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Fullpage from "./Fullpage";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Raffle from "./Raffle";
import Headercel from "./Headercel";
import Roadmap from "./Roadmap";
import Vaults from "./Vaults";

function App() {
  return (
    <Router>
      <Header/>
      <Headercel/>
      <Routes>
        <Route exact path="/" element={<Fullpage />}></Route>
        <Route path="/raffle" element={<Raffle/>} ></Route>
        <Route path="/roadmap" element={<Roadmap/>} ></Route>
        <Route path="/vault" element={<Vaults/>} ></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
