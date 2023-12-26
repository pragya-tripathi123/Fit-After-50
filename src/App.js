import Home from "./Components/home/Home";
import About from "./Components/about/Aboutpage";
import Fitness from "./Components/fitness/Fitnesspage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbarpage from "./Components/navbar/Navbarpage";
import Nutrition from "./Components/nutrition/Nutritionpage";
import Weight from "./Components/weight_management/Weightpage";
import Tools from "./Components/toolsCalcu/Toolspage";
import Member from "./Components/member/Memberpage";
import Weightdetailpage from "./Components/detailedPage/Weightdetailpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarpage></Navbarpage>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/article" element={<About></About>}></Route>
          <Route path="/fitness" element={<Fitness></Fitness>}></Route>
          <Route path="/nutrition" element={<Nutrition></Nutrition>}></Route>
          <Route path="/weight" element={<Weight></Weight>}></Route>
          <Route path="/tools" element={<Tools></Tools>}></Route>
          <Route path="/member" element={<Member></Member>}></Route>
          <Route path="/detailedPage" element={<Weightdetailpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
