import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout/>}>
            <Route path="/" element={<Home/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
