// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Courses } from './Pages/Courses';
import { About } from './Pages/About';
import { CourseDetails } from './Pages/CourseDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Courses' element={<Courses/>}/>
        <Route exact path='/Coursesdetails' element={<CourseDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
