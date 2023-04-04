import React, { useState, useEffect } from "react";
import investorProfile from "./investorProfile";
import "./investorDashboard.css";
import graph from "./image/graph.png";
import graph2 from "./image/graph2.png";
import pie from "./image/pie.png";
import key1 from "./image/key1.png";
import key2 from "./image/key2.png";
import status60 from "./image/status60.png";
import status40 from "./image/status40.png";
import status10 from "./image/status10.png";

function InvestorDashboard() {
  const [developers, setDevelopers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([]);

  // Function to fetch developer profiles from the server
  const fetchDevelopers = async () => {
    const response = await fetch("/api/developers");
    const data = await response.json();
    setDevelopers(data);
  };

  // Function to fetch projects from the server
  const fetchProjects = async () => {
    const response = await fetch("/api/projects");
    const data = await response.json();
    setProjects(data);
  };

  // Function to fetch ideas from the server
  const fetchIdeas = async () => {
    const response = await fetch("/api/ideas");
    const data = await response.json();
    setIdeas(data);
  };

  // Fetch developer profiles, projects, and ideas on component mount
  useEffect(() => {
    fetchDevelopers();
    fetchProjects();
    fetchIdeas();
  }, []);

  return (
    <div>
      <div style={{ background: "#3F0E40", color: "#FFFFFF", padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Investor Dashboard</h1>
        <investorProfile />
        <h2 style={{ marginBottom: "10px" }}>Developers</h2>
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {developers.map((developer) => (
            <li key={developer.id} style={{ marginBottom: "5px" }}>
              {developer.firstName} {developer.lastName}
            </li>
          ))}
        </ul>
        <h2 style={{ marginBottom: "10px" }}>Projects</h2>
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {projects.map((project) => (
            <li key={project.id} style={{ marginBottom: "5px" }}>
              {project.name} - {project.description}
            </li>
          ))}
        </ul>
        <h2 style={{ marginBottom: "10px" }}>Ideas</h2>
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {ideas.map((idea) => (
            <li key={idea.id} style={{ marginBottom: "5px" }}>
              {idea.name} - {idea.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-fluid container-dashboard">
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
                <img src={graph} alt="graph" />
              </div>
              <div className="details text-center">
                This is an overview of your combined investments and total
                contribution.
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
                          <img src={key1} className="key" alt="key" /> Combined
                          Investments
                        </li>
                        <li>
                          <img src={key2} className="key" alt="key" /> Pending
                          investments
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
              <div className="title pending">Popular Projects</div>
              <div className="title2 d-flex">Stake rate</div>
              <div className="row list">
                <div className="col-md-6">
                  <ul>
                    <li className="proposal-list">
                      Hospital Management System
                    </li>
                    <li className="proposal-list">Augmented Reality Tool</li>
                    <li className="proposal-list">Cloud-based Cryptocurrency platform</li>
                    <li className="proposal-list">Venture Capital Workspace</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li className="proposal-list date pos">+127%</li>
                    <li className="proposal-list date pos">+110%</li>
                    <li className="proposal-list date pos">+101%</li>
                    <li className="proposal-list date neg">-89%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="projects-invested work-space">
              <div className="title pending">Project Invested</div>
              <div className="title2 d-flex">Status</div>
              <div className="row list">
                <div className="container-fluid">
                  <div className="row row3">
                      <div className="name">E-commerce site</div>
                      <div className="status"><img src={status40} alt="status" /></div>
                  </div>
                  <div className="row row3">
                      <div className="name">Health and Wellness app</div>
                      <div className="status"><img src={status10} alt="status" /></div>
                  </div>
                  <div className="row row3">
                      <div className="name">Venture Capitalist Workspace</div>
                      <div className="status"><img src={status60} alt="status" /></div>
                  </div>
                  <div className="row row3">
                      <div className="name">Cloud based project management tool</div>
                      <div className="status"><img src={status40} alt="status" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorDashboard;
