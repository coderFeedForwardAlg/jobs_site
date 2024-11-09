
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AddJob from "./componants/AddJob";
function App() {

  
  return (
    <div>
       {/* <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Login/>} /> */}
            {/* <Route path="/" element={<AddJob/>} /> */}
            {/* <Route path="/" element={<SeeJobs/>} /> */}
          {/* </Routes> */}
        {/* </BrowserRouter> */}
        <AddJob/>
    </div>
  );
}

export default App;
