import './App.css';
import Container1 from './Components/Container1';
import Events from './Components/Events';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    
    <Routes>
    <Route path="/events" element={<Events/>} />
    <Route path="/" element={<Container1/>}/>
    </Routes>       
  );
}

export default App;
