import { useState } from "react";
function App() {
  const [title, setTitle] = useState([]);
  const [compnayName, setCompnayName] = useState([]);
  const [didRespond, setDidRespond] = useState([]);
  const [whereApplied, setWhereApplied] = useState([]);
  
  const [contactName, setContactName] = useState([]);
  const [contactEmail, setContactEmail] = useState([]);
  const [nextInterviewTime, setNextInterviewTime] = useState([]);



  const [retern, setReturn] = useState("");

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };
  const updateCompany = (event) => {
    setCompnayName(event.target.value);
  };

  const updateRespond = (event) => {
    setDidRespond(event.target.value);
  };

  const updateApplied = (event) => {
    setWhereApplied(event.target.value);
  };

  const updateName = (event) => {
    setContactName(event.target.value);
  };

  const updateEmail= (event) => {
    setContactEmail(event.target.value);
  };

  const updateTime = (event) => {
    setNextInterviewTime(event.target.value);
  };


    // function upload
  const upload = async (event) => {
    event.preventDefault();
    const data = {
      "title": title,
      "compnayName": compnayName,
      "didRespond": didRespond,
      "whereApplied": whereApplied,
      "contactName": contactName,
      "contactEmail": contactEmail,
      "nextInerviewTime": nextInterviewTime
      
    }

    try {
      
      // this code block (whats in the {}) is setting up the request to the server
      // this uri should be somthing you can hit from anywhere, if not somthing is wrong
     // the "/insert_test" is the endpoint for post request
      const reqest = new Request("https://docapi.team-stingray.com/insret_test",  {
        
        // path meaning we send data to server 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // make data a string from JSON (java script object notation)
        mode: 'cors' // need this (not sure why but for security reasons)
      })

      // this line is making the request (that we jsut set up)
      const res = await fetch(reqest); // actuy make the request 
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const json = await res.json(); // turn response back into json and check to see if it worked
      console.log(json);
    }catch (error) {
      console.error(error.message);
    }
  }

  // function get data 
  const get_data = async (event) => {
    event.preventDefault();
    const data = {
      "title": title
    }

    try {
      // this works about the same way 
      // but we use a get request so we just get data from the server 
      // the "/recipes" is the endpoint for get request
      // its recipes because I based this off a total of recipes and dident fix it sorry
      const reqest = new Request("https://docapi.team-stingray.com/recipes",  {
        
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: 'cors'
      })
      const res = await fetch(reqest);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const json = await res.json();
      console.log(json);
      const jobs = json.map(job =>  <div>
        <li>{job.title} {job.compnayName}</li>
        
        </div>);

      setReturn(jobs); // this set return is only for react, probably want to do somthing else
    }catch (error) {
      console.error(error.message);
    }
  }
  // "title": title,
  // "compnayName": compnayName,
  // "didRespond": didRespond,
  // "whereApplied": whereApplied,
  // "password": password,
  // "username": username,
  // "contactName": contactName,
  // "contactEmail": contactEmail,
  // "nextInerviewTime": nextInterviewTime
  
  return (
    <div>
      <h2> Enter you job info</h2> <br/>
      Title: <br/>
      <input type="text" value={title} onChange={updateTitle} />  <br/><br/>
      
      Company Name: <br/>
      <input type="text" value={compnayName} onChange={updateCompany} /> <br/><br/>

      Did they respond: <br/>
      <input type="text" value={didRespond} onChange={updateRespond} /><br/><br/>

      Where Did you apply: <br/>
      <input type="text" value={whereApplied} onChange={updateApplied} /><br/><br/>

      Contact Nam: <br/>
      <input type="text" value={contactName} onChange={updateName} /><br/><br/>

      Contact Email: <br/>
      <input type="text" value={contactEmail} onChange={updateEmail} /><br/><br/>

      Time of next interview: <br/>
      <input type="text" value={nextInterviewTime} onChange={updateTime} /><br/><br/>


      <button onClick={upload}> upload data </button>
      <br/>
      <button onClick={get_data}> get the data </button>
      {/* {retern} */}
      <ul>{retern}</ul>
    </div>
  );
}

export default App;
