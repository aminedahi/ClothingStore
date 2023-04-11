import "./style.css"
import React from 'react'
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import Singleproduct from './compenents/Singleproduct';
import Homescreen from "./compenents/Homescreen";
function App() {
  return (
    <div className="App d-flex flex-column site-container">
      <header className="header">
        <a href="/" >lBall</a>
      </header>
      <BrowserRouter>
      <main>
        <Routes>
            <Route path="/" element={<Homescreen/>}/>
            <Route path="/product/:_id" element={<Singleproduct/>}/>
        </Routes>
      </main> 
      </BrowserRouter>
      <footer className="footer text-center">
        All right reserved
      </footer>
    </div>
  );
}

export default App;
