
import './App.css';
import CreateBook from './components/CreateBook';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AllBook from './components/AllBook';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<CreateBook/>}/>
        <Route path='/allBook' element={<AllBook/>}/>
        <Route path='/updatebook/:id' element={<UpdateBook/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
