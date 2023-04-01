import React, { useState, useEffect } from 'react';
import investorProfile from "./investorProfile";

function InvestorDashboard() {
  const [developers, setDevelopers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([]);
  
  // Function to fetch developer profiles from the server
  const fetchDevelopers = async () => {
    const response = await fetch('/api/developers');
    const data = await response.json();
    setDevelopers(data);
  };
  
  // Function to fetch projects from the server
  const fetchProjects = async () => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    setProjects(data);
  };
  
  // Function to fetch ideas from the server
  const fetchIdeas = async () => {
    const response = await fetch('/api/ideas');
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
    <div style={{ background: '#3F0E40', color: '#FFFFFF', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Investor Dashboard</h1>
      <investorProfile />
      <h2 style={{ marginBottom: '10px' }}>Developers</h2>
      <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        {developers.map(developer => (
          <li key={developer.id} style={{ marginBottom: '5px' }}>
            {developer.firstName} {developer.lastName}
          </li>
        ))}
      </ul>
      <h2 style={{ marginBottom: '10px' }}>Projects</h2>
      <ul  style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        {projects.map(project => (
          <li key={project.id} style={{ marginBottom: '5px' }}>
            {project.name} - {project.description}
          </li>
        ))}
      </ul>
      <h2 style={{ marginBottom: '10px' }}>Ideas</h2>
      <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        {ideas.map(idea => (
          <li key={idea.id} style={{ marginBottom: '5px' }}>
            {idea.name} - {idea.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvestorDashboard;
