import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Authentication/Registration/Registration'
import Update from './Pages/Update/Update';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ManageInventoris from "./Pages/ManageInventory/ManageInventoris"
import AddCar from './Pages/AddCar/AddCar';
import Blogs from './Pages/Blogs/Blogs';
import MyCars from './Pages/Mycars/MyCars';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Login' element={<Login></Login>} />
        <Route path='/register' element={<Registration></Registration>} />
        <Route path='/inventory/:id' element={
        <RequireAuth>
          <Update/>
        </RequireAuth>       
        }></Route>

        <Route path='/manageInventoris' element={
          <RequireAuth>
          <ManageInventoris/>
        </RequireAuth>
        }></Route>
        <Route path='/addcar' element={
          <RequireAuth>
          <AddCar/>          
        </RequireAuth>
        }></Route>
        <Route path='/mycars' element={
          <RequireAuth>
          <MyCars/>
        </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='*' element={<NotFound/>} />
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
