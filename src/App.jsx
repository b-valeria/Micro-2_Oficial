import MainContainer from './components/MainContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './components/Login';
import MainContainer2 from './components/MainContainer2';
function App() {

  return (

    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<MainContainer />} />

        <Route path='/login' element={<MainContainer2/>} />
        <Route path='*' element={<h1>Not Found 404</h1>} />


      </Routes>
    
    
    </BrowserRouter>


 
  );
}

export default App;
 