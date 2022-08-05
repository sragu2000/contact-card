import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home.js';
import HomeSecond from '../Pages/HomeSecond.js';
import HomeThird from "../Pages/HomeThird.js";
import HomeFourth from "../Pages/HomeFourth.js";
const PageRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/fromarray" element={<HomeSecond/>}/>
          <Route exact path="/fromarray-foreach" element={<HomeThird/>}/>
          <Route exact path="/jsondata" element={<HomeFourth/>}/>
        </Routes>
      </BrowserRouter>
      );
}
export default PageRoutes;