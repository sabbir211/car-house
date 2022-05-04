import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Authentication/Registration/Registration'
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Login' element={<Login></Login>} />
        <Route path='/register' element={<Registration></Registration>} />
        <Route path='*' element={<NotFound/>} />
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
