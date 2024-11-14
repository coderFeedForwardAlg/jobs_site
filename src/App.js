
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AddJob from "./componants/AddJob";
import SeeJobs from "./componants/SeeJobs";
function App() {

  
  return (
    <div>
        <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Login/>} /> */}
             <Route path="/" element={<AddJob/>} />
            <Route path="/see" element={<SeeJobs/>} />
           </Routes>
         </BrowserRouter>

        </div>)
}
export default App
