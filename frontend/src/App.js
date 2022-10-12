import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
//import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
const isAuth = false;


function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' exact element={<Home />} />
        {/* <Route path='/authenticate' exact element={<Authenticate />} /> */}
        <Route path = '/authenticate' element={({location})=>{
            isAuth ? (<Navigate to={
                {
                   pathname: '/rooms',
                   state: {from: location}
                }
            } />) : <Authenticate/>;
         }} />
        {/* <Route path='/register' exact element={<Register />} />
        <Route path='/login' exact element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
