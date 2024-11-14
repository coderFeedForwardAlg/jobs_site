import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
function SeeJobs() {
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


  // function get data 
  const get_data = async (event) => {
    // event.preventDefault();
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
        <li>{job.title} {"|"} {job.compnayName} {"|"} {job.didRespond} {"|"} {job.whereApplied} {"|"} {job.contactName} {"|"} {job.contactEmail} {"|"} {job.nextInerviewTime}</li>
        
        </div>);

      setReturn(jobs); // this set return is only for react, probably want to do somthing else
    }catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    get_data();
}, []);
 
  
  return (
    <div className="addjob">
        <Link to="/">Add Job</Link>
       
      <ul>{retern}</ul>
    </div>
  );
}

export default SeeJobs;
