import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetDetails from "./pages/GetDetails";
import Career from "./pages/Career";
import Exam from "./pages/Exam";
import Faculty from "./pages/Faculty";
import Contact from './pages/Contact';
import Notice from './pages/Notice';
import Course from './pages/Course';
import Recognition from "./pages/Recognition"; 
import BedTimetable from "./pages/BedTimetable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-details" element={<GetDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/recognition" element={<Recognition />} /> {/* ✅ */}
        <Route path="/timetable/bed" element={<BedTimetable />} />
    
      </Routes>
    </Router>
  );
}

export default App;
