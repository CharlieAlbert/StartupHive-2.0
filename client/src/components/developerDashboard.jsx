import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const DeveloperDashboard = () => {
  const [portfolio, setPortfolio] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectFiles, setProjectFiles] = useState([]);
  const [stakeOffer, setStakeOffer] = useState("");
  const [alert, setAlert] = useState(null);

  const handlePortfolioChange = (e) => {
    setPortfolio(e.target.value);
  };

  const handleProjectTitleChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleProjectFileChange = (e) => {
    const files = Array.from(e.target.files);
    setProjectFiles(files);
  };

  const handleStakeOfferChange = (e) => {
    setStakeOffer(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Code to submit the form data to the server
    setAlert("Your project has been successfully posted!");
    // Clear the form
    setPortfolio("");
    setProjectTitle("");
    setProjectDescription("");
    setProjectFiles([]);
    setStakeOffer("");
  };

  return (
    <div>
      {alert && <Alert color="success">{alert}</Alert>}
      <h2>Developer Profile</h2>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="portfolio">Portfolio</Label>
          <Input
            type="textarea"
            name="portfolio"
            id="portfolio"
            value={portfolio}
            onChange={handlePortfolioChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="projectTitle">Project Title</Label>
          <Input
            type="text"
            name="projectTitle"
            id="projectTitle"
            value={projectTitle}
            onChange={handleProjectTitleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="projectDescription">Project Description</Label>
          <Input
            type="textarea"
            name="projectDescription"
            id="projectDescription"
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="projectFiles">Project Files</Label>
          <Input
            type="file"
            name="projectFiles"
            id="projectFiles"
            multiple
            onChange={handleProjectFileChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="stakeOffer">Stake Offer</Label>
          <Input
            type="text"
            name="stakeOffer"
            id="stakeOffer"
            value={stakeOffer}
            onChange={handleStakeOfferChange}
          />
        </FormGroup>
      </Form>
      <button type="submit" color="primary">
          Post Project
        </button>
    </div>
  );
};

export default DeveloperDashboard;
