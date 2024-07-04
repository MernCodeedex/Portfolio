import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div>
 <Routes>
  <Route path='/' Component={Home}/>
 </Routes>
    </div>
  );
}

export default App;
