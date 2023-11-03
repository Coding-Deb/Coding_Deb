// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Courses } from './Pages/Courses';
import { About } from './Pages/About';
import { CourseDetails } from './Pages/CourseDetails';
import { Sign } from './Pages/Sign';
// import { SignIn } from './Pages/SignIn';
// import { SignUp } from './Pages/SignUp';


function App() {
  const containerStyle = {
    background: "linear-gradient(45deg, #3494E6, #EC6EAD)",
    minHeight: "100vh",
    // display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    // padding:"25px",
    // marginTop:"40px"
  };

  return (
    <Router>
      <div className="App" style={containerStyle}>
        <Navbar />
      <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Courses' element={<Courses/>}/>
        <Route exact path='/SignIn' element={<Sign/>}/>
        <Route exact path='/SignUp' element={<Sign/>}/>
        <Route exact path='/Coursesdetails' element={<CourseDetails/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
