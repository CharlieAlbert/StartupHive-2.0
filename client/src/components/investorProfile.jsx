import React, { useState } from "react";
import { Link } from 'react-router-dom';

function InvestorProfile() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [age, setAge] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [password, setPassword] = useState("");
const [profilePicture, setProfilePicture] = useState("");
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

const handleSubmit = (event) => {
event.preventDefault();
console.log("Investor profile submitted");
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Email:", email);
console.log("Phone Number:", phoneNumber);
console.log("Password:", password);
console.log("Profile Picture:", profilePicture);
setIsEditing(false);
};

const handleEditProfile = (event) => {
event.preventDefault();
setIsEditing(true);
};

return (
<div  style={{backgroundColor: "#4B0082", color: "#FFFFFF", padding: "20px"}}>
<h1>Investor Profile</h1>
<Link to ="/dashboard" style={{color: "#FFFFFF"}}>Go to dashboard</Link>
<form onSubmit={handleSubmit}>
<label>
First Name:
<input type="text" value={firstName} onChange={handleFirstNameChange} disabled={!isEditing} style={{marginLeft: "10px", marginRight: "10px"}}  />
</label>
<br />
<label>
Last Name:
<input type="text" value={lastName} onChange={handleLastNameChange} disabled={!isEditing} style={{marginLeft: "10px", marginRight: "10px"}}  />
</label>
<br />
<label>
Age:
<input type="text" value={age} onChange={handleAgeChange} disabled={!isEditing} style={{marginLeft: "10px", marginRight: "10px"}}  />
</label>
<br />
<label>
Email:
<input type="text" value={email} onChange={handleEmailChange} disabled={!isEditing} style={{marginLeft: "10px", marginRight: "10px"}}  />
</label>
<br />
<label>
Phone Number:
<input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} disabled={!isEditing} style={{marginLeft: "10px", marginRight: "10px"}}  />
</label>
<br />
<label>
Password:
<input type="password" value={password} onChange={handlePasswordChange} disabled={!isEditing} style={{marginLeft: "10px", marginRight: "10px"}}  />
</label>
<br />
<label>
Profile Picture:
<input type="file" accept="image/*" onChange={handleProfilePictureChange} disabled={!isEditing}  />
</label>
<br />
{isEditing ? (
<input type="submit" value="Save" />
) : (
<input type="submit" value="Edit Profile" onClick={handleEditProfile} />
)}
</form>
</div>
);
}

export default InvestorProfile
