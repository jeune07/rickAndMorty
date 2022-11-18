import {BrowserRouter,Routes,Route} from "react-router-dom"
import Characters from "./compoments/pages/characters/Characters";
import Home from "./compoments/pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/caracters" element={<Characters/>} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
