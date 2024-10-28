import { useState } from "react";
function App() {
  const [title, setTitle] = useState("");

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const upload = async (event) => {
    event.preventDefault();
    const data = {
      "title": "job_title"
    }

    try {
      
      const reqest = new Request("https://docapi.team-stingray.com/insret_test",  {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: 'cors'
      })
      const res = await fetch(reqest);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const json = await res.json();
      console.log(json);
    }catch (error) {
      console.error(error.message);
    }
  }
  
  return (
    <div>
      hello world
      <input type="text" value={title} onChange={updateTitle} />
      <p>You entered: {title}</p>
      <button onClick={upload}> upload data </button>
    </div>
  );
}

export default App;
