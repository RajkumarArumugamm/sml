import logo from './logo.svg';
import './App.css';
import SMLTextBox from './components/Shared/SMLTextBoxWithLabel/SMLTextBoxWithLabel';
import Login from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SideNav from './components/Shared/SideNav/SideNav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard';
import ViewPlan from './pages/MyProfilePage/ViewPlan/ViewPlan';
import MyProfile from './pages/MyProfilePage/MyProfile';


function App(props) {
  return (
    <div>
      <Router>       
          <Routes>         
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signUp" element={<SignUpPage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/viewPlan" element={<ViewPlan />} />
            <Route exact path="/myProfile" element={<MyProfile />} />
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      {/* <Login /> */}
      {/* <SignUpPage/> */}
      {/* <SideNav /> */}
    </div>
  );
}

export default App;
