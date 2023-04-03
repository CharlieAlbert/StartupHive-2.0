import React, { useState, useEffect } from "react";
import axios from "axios";

import "./UserProfile.css";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    // Fetch user data from server and set state
    axios
      .post("/api/profile")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    setUsername(userData.username);
    setFullname(userData.fullname);
    setRole(userData.role);
    setPhone(userData.phone);
    setMobile(userData.mobile);
    setWebsite(userData.website);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    // Send updated data to server
    axios
      .post("/api/profile", {
        username,
        fullname,
        email,
        role,
        mobile,
        phone,
        website,
      })
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="profile-container">
      <div className="profile-avatar">
        <img src={userData.avatar} alt="Avatar" className="avatar-image" />
      </div>
      <div className="profile-details">
        <div className="profile-username">
          <span>Username:</span>
          {userData && userData.username}
        </div>
        <div className="profile-fullname">
          <span>Full Name:</span>
          {userData && userData.fullname}
        </div>
        <div className="profile-email">
          <span>Email:</span>
          {userData && userData.email}
        </div>
        <div className="profile-role">
          <span>Role:</span>
          {userData && userData.role}
        </div>
        <div className="profile-role">
          <span>Phone:</span>
          {userData && userData.phone}
        </div>
        <div className="profile-role">
          <span>Mobile:</span>
          {userData && userData.mobile}
        </div>
        <div className="profile-role">
          <span>Address:</span>
          {userData && userData.address}
        </div>
        <div className="profile-role">
          <span>Website:</span>
          {userData && userData.website}
        </div>
        {isEditing ? (
          <div className="profile-edit-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              type="text"
              placeholder="website"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
            <div className="profile-edit-buttons">
              <button className="profile-save-button" onClick={handleSaveClick}>
                Save
              </button>
              <button
                className="profile-cancel-button"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="profile-edit-button" onClick={handleEditClick}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
