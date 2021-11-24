import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Add from './commponent/add/Add';
import Chat from './commponent/Chat/Chat';
import Global from './commponent/Global/Global';
import Homeglobal from './commponent/Global/Homeglobal';
import Header from './commponent/Header/Header';
import Home from './commponent/Home/Home';
import Login from './commponent/login/Login';
import AuthProvider from './context/Context';
function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
     <Routes>
     <Route path="/Chat" element={<Chat></Chat>}></Route>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/global" element={<Homeglobal/>}></Route>
     <Route path="/addFriend" element={<Add />}></Route>
     <Route path="/login" element={<Login />}></Route>
     </Routes>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
