import { useState } from "react";
import "./App.css";

function App() {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    aardharnum: "",
    pannum: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div className="main-container">
          <div className="comp">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={FormData.username}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
              required
            />
          </div>
          <div className="comp">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email Id"
              value={FormData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>
          <div className="comp">
            <label>Phone No</label>
            <input
              type="number"
              placeholder="Enter Your Phone No"
              value={FormData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              required
            />
          </div>
          <div className="comp">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter Your Address"
              value={FormData.address}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, address: e.target.value }))
              }
              required
            />
          </div>
          <div className="comp">
            <label>Aardhar Number</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX"
              value={FormData.aardharnum}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, aardharnum: e.target.value }))
              }
              required
            />
          </div>
          <div className="comp">
            <label>Pan Number</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX"
              value={FormData.pannum}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, pannum: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <button className="comp-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
