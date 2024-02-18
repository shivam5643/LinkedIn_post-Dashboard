import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Postdetails from "./components/Postdetails";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
     <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/post" element={<Posts/>} />
       
     </Routes>
    </Router>
  );
}

export default App;