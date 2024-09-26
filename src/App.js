import './App.css';
// import Footer from './Component/Footer';
import Header from './Component/Header.jsx';
import {Routes,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import HomePage from "./pages/Home";
import RegisterPage from './pages/Register.jsx';
import SigninPage from './pages/Sign-In.jsx';
import Academics from './pages/Academics.jsx';
import Eligibility from './pages/Eligibility-Criteria.jsx';
import MeritList from './pages/Merit-List.jsx';
import Accounts from './pages/Accounts.jsx';
import Departments from './pages/Departments.jsx';
import Article from './pages/News-Articles.jsx';
import Calendar from './pages/Events-Calendar.jsx';
import Announcements from './pages/Announcements.jsx';
import Research from './pages/Research-Projects.jsx';
import Publications from './pages/Research-Publications.jsx';
import Contactinfo from './pages/Contact-Info.jsx';
import MapsDirection from './pages/Maps-Directions.jsx';
// import Footer from './Component/Footer.js';

function App() { 
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/home" element={<HomePage />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/merit-list" element={<MeritList />} />
        <Route path="/accounts" element={<Accounts/>} />
        <Route path="/it-department" element={<Departments />} />
        <Route path="/Sign-in" element={<SigninPage />} />
        <Route path="/news" element={<Article />} />
        <Route path="/events" element={<Calendar />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/research-projects" element={<Research />} />
        <Route path="/research-publications" element={<Publications />} />
        <Route path="/contact-info" element={<Contactinfo />} />
        <Route path="/campus-maps" element={<MapsDirection />} />
    </Routes>
    {/* <Footer /> */}

    </div>
  );
}

export default App;
