import StartPage from './components/homePage/startPage';
import ManagerPage from './components/homePage/managerPage';
import ClientPage from './components/homePage/clientPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NameLoginDialog from './components/signIn/signComponent';


function App() {
  return (
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signin" element={<NameLoginDialog />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/client" element={<ClientPage />} />
      </Routes>
  );
}

export default App;