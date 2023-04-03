import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import "./investorDashboard.css";
import graph from "./image/graph.png";
import graph2 from "./image/graph2.png";
import pie from "./image/pie.png";
import key1 from "./image/key1.png";
import key2 from "./image/key2.png";
import status60 from "./image/status60.png";
import status40 from "./image/status40.png";
import status10 from "./image/status10.png";

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
      

      <div className="container-fluid container">
        <div className="row">
          <div className="search p-3">
            <div className="search-content">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="row row1">
          <div className="col-md-8">
            <div className="investment-track work-space">
              <div className="title">Monthly perfomance track</div>
              <div className="graph">
                <img src={graph2} alt="graph" />
              </div>
              <div className="details text-center">
                This is an overview of your combined stake offers accepted.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-space">
              <div className="title">Portfolio</div>
              <div className="portfolio">
                <div className="row">
                  <div className="col-md-6 d-flex portfolio">
                    <div className="pie">
                      <img src={pie} alt="pie" />
                    </div>
                    <div className="pie-content">
                      <ul>
                        <li>
                          <img src={key1} className="key" alt="key" /> Complete
                          projects
                        </li>
                        <li>
                          <img src={key2} className="key" alt="key" /> Pending
                          projects
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-lists">
          <div className="col-md-6">
            <div className="proposals work-space">
              <div className="title pending">Pending Projects</div>
              <div className="title2 d-flex">Date</div>
              <div className="row list">
                <div className="col-md-6">
                  <ul>
                    <li className="proposal-list">
                      Hospital Management System
                    </li>
                    <li className="proposal-list">Venture Capital Workspace</li>
                    <li className="proposal-list">Venture Capital Workspace</li>
                    <li className="proposal-list">Venture Capital Workspace</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li className="proposal-list date">12th Sep 2023</li>
                    <li className="proposal-list date">12th Sep 2023</li>
                    <li className="proposal-list date">12th Sep 2023</li>
                    <li className="proposal-list date">12th Sep 2023</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="projects-invested work-space">
              <div className="title pending">Pending Projects</div>
              <div className="title2 d-flex">Status</div>
              <div className="row list">
                <div className="container-fluid">
                  <div className="row row3">
                      <div className="name">Venture Capitalist Workspace</div>
                      <div className="status"><img src={status40} alt="status" /></div>
                  </div>
                  <div className="row row3">
                      <div className="name">Venture Capitalist Workspace</div>
                      <div className="status"><img src={status10} alt="status" /></div>
                  </div>
                  <div className="row row3">
                      <div className="name">Venture Capitalist Workspace</div>
                      <div className="status"><img src={status60} alt="status" /></div>
                  </div>
                  <div className="row row3">
                      <div className="name">Venture Capitalist Workspace</div>
                      <div className="status"><img src={status40} alt="status" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DeveloperDashboard;
