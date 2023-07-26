import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Mainpage from "./Components/Mainpage/Mainpage";
import Mentors from "./Components/Mentors/Mentors";
import Navbar from "./Components/Navbar/Navbar";
import Studentsreview from "./Components/Studentsreview/Studentsreview";
import Footer from "./Components/footer/footer";
import Join from "./Components/join/Join";
import Index from "./Components";

function App() {
  return (
    <>
      <Navbar />
      <Index />
      {/*<BrowserRouter>
        <Routes>
          <Route excat="/" element={<Index />} />
        </Routes>
      </BrowserRouter>*/}
    </>
  );
}

export default App;
