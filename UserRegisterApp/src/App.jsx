import { Routes, Route } from "react-router-dom";
import NewRegister from './Pages/AddCustomer';
import AllUser from './Pages/AllUser';
import InfoUser from './Pages/UserInfo';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/new-register" element={<NewRegister />} />
        <Route path="/all-user" element={<AllUser />} />
        <Route path="/info-user" element={<InfoUser />} />
      </Routes>
    </>
  );
}

export default App;
