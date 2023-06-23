import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Properties } from "./Pages/Properties";
import {PropertyPresent} from "./Components/PropertyPresent";
import {Footer} from "./Components/Footer";
import {ContactUs} from "./Pages/ContactUs";
import {AboutUs} from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/properties' exact element={<Properties/>} />
          <Route path='/propertypresent' exact element={<PropertyPresent/>} />
          <Route path="/contact" exact element={<ContactUs/>} />
          <Route path="/about" exact element={<AboutUs/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
