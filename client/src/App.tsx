import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css'
import {BrowserRouter as Router} from "react-router-dom";
import {Admin} from "./pages/Admin/Admin";

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
          <Admin/>
      </Router>
    </div>
  );
}

export default App;
