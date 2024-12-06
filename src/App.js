import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name </label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name </label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* Add "Full Name:" prefix */}
      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
}

export default App;
