import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Add from './commponent/add/Add';
import Chat from './commponent/Chat/Chat';
import Homeglobal from './commponent/Global/Homeglobal';
import Home from './commponent/Home/Home';
import Login from './commponent/login/Login';
import PrivateRoute from './commponent/privateRoute/PrivateRoute';
import AuthProvider from './context/Context';
function App() {
  return (
    <div>
    <AuthProvider>
    <BrowserRouter>
     <Routes>
     <Route path="/Chat" element={<PrivateRoute><Chat></Chat></PrivateRoute>}></Route>
     <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
     <Route path="/global" element={<PrivateRoute><Homeglobal/></PrivateRoute>}></Route>
     <Route path="/addFriend" element={<PrivateRoute><Add /></PrivateRoute>}></Route>
     <Route path="/login" element={<Login />}></Route>
     </Routes>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
