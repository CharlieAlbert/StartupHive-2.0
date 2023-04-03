import React, { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    background: "#241f4e",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    display: "block",
    margin: "10px 0",
  },
  input: {
    background: "white",
    color: "#241f4e",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  select: {
    background: "white",
    color: "#241f4e",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    height: "100px",
  },
  button: {
    background: "#d78cff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    marginTop: "20px",
  },
  link: {
    color: "#d78cff",
    textDecoration: "none",
    display: "block",
    marginBottom: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

function DeveloperProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.value);
  };

  // Function to handle changes to the technologies field
  const handleTechnologiesChange = (event) => {
    const selectedTechnologies = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setTechnologies(selectedTechnologies);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Developer profile submitted");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Technologies:", technologies);
    console.log("Password:", password);
    console.log("Profile Picture:", profilePicture);
    setIsEditing(false);
  };
  const handleEditProfile = (event) => {
    event.preventDefault();
    setIsEditing(true);
    // TODO: Save form data to server
  };

  return (
    <div style={{ backgroundColor: "#4A235A", color: "#fff", padding: "20px" }}>
      <h1>Developer Profile</h1>
      <Link
        style={{ color: "#fff", textDecoration: "none" }}
        to="/developerDashboard"
      >
        Go to Dashboard
      </Link>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            disabled={!isEditing}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            disabled={!isEditing}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={handleAgeChange}
            disabled={!isEditing}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            disabled={!isEditing}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            disabled={!isEditing}
          />
        </label>
        <br />
        <label>
          Technologies:
          <select
            multiple={true}
            value={technologies}
            onChange={handleTechnologiesChange}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            disabled={!isEditing}
          </select>
        </label>
        <label>
          Profile Picture:
          <input
            type="file"
            onChange={(event) => setProfilePicture(event.target.files[0])}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default DeveloperProfile;
