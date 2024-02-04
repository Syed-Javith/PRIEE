import './App.css';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Signin from './Signin';
import Home from "./Home";

function App() {

  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/home' element={<Home/>}/>

        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
