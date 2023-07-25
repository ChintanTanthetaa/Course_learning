import "./App.css";
import Courses from "./Components/Courses/Courses";
import Mainpage from "./Components/Mainpage/Mainpage";
import Mentors from "./Components/Mentors/Mentors";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Mainpage />
      <Courses />
      <Mentors />
    </>
  );
}

export default App;
