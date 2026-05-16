import logo from './logo.svg';
import './App.css';
import CreateBook from './components/CreateBook';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AllBook from './components/AllBook';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<CreateBook/>}/>
        <Route path='/allBook' element={<AllBook/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
