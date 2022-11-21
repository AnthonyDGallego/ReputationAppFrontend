import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home/Home.jsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeLayout/>}>
                        <Route index element={<Home/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App
