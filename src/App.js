import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home fireBaseApp={props.fireBaseApp}/>} />
        <Route path="/about" element = {<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
