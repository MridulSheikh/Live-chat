import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Add from './commponent/add/Add';
import Chat from './commponent/Chat/Chat';
import Global from './commponent/Global/Global';
import Homeglobal from './commponent/Global/Homeglobal';
import Header from './commponent/Header/Header';
import Home from './commponent/Home/Home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/Chat" element={<Chat></Chat>}></Route>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/global" element={<Homeglobal/>}></Route>
     <Route path="/addFriend" element={<Add />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
