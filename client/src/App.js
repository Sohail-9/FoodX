import axios from 'axios'
import './App.css';
import { useState } from 'react'

function App() {
  const [user, setUser] = useState("")
  const [data, setData] = useState(null)
  const handleLogin = () => {
    axios.get("http://localhost:8080/user/login", {
      params: {
        email: "sohail@124",  // Correcting the email format
        password: "123456"
      }
    }).then((response) => {
      // It's good practice to name the parameter 'response' instead of 'data'
      alert("User Loged in")
      setUser(response.data.data._id) // Accessing the actual data in the response
    })
      .catch((error) => {
        console.log(error);
      })
  }

  const fetchData = () => {
    console.log(user)
    axios.get("http://localhost:8080/post/details", {
      params: {
        author: user
      }
    })
      .then((response) => {
        setData(response.data.data)
        console.log(data)
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchData}>Ftech Details</button>

      <div>
        <h1>Feed</h1>
        {
          data !== null ?  data.map((item) => {
            return <div className='card' style={{ border: "1px solid black", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "100px" }}>
              <p>{item.tweet}</p>
              <p>{item.createAt}</p>
            </div>
          })
           :
           (<>No data</>)
        }

      </div>


    </div>
  );
}

export default App;
