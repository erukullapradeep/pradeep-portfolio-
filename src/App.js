 // src/App.js
import React from 'react';
import './App.css';
import profilePic from './profile.jpg'; // Make sure to add your image in the public or src folder

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={profilePic} alt="Pradeep" className="profile-pic" />
        <h1>Erukulla Pradeep</h1>
        <p>Frontend Developer</p>
  
      <a href="/resume.pdf" download className="download-btn">
        📄 Download Resume
      </a>
   
      </header>

      <section className="section">
        <h2>Career Objective</h2>
        <p>
          A highly motivated Frontend Developer passionate about creating clean UI/UX designs, optimizing web performance,
          and collaborating with teams to develop dynamic web solutions. Seeking to leverage my skills to contribute to innovative projects and enhance user experiences.
        </p>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <h3>Associate Software Engineer - Ronex Technologies, Karimnagar (1 year)</h3>
        <ul>
          <li>Developed and maintained responsive web pages.</li>
          <li>Fixed bugs and optimized website performance.</li>
          <li>Collaborated with backend developers for API integration.</li>
          <li>Ensured cross-browser compatibility and responsiveness.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech:</strong> Malla Reddy College Engineering, HYD (CSE)</li>
          <li><strong>Intermediate:</strong> TS Model School and Junior College (M.P.C)</li>
          <li><strong>SSC:</strong> Vivekananda High School, Karimnagar</li>
        </ul>
      </section>

      <section className="section">
        <h2>Certifications</h2>
        <ul>
          <li>Web Developer - Technology Institute</li>
          <li>Covered front-end technologies: HTML, CSS, JavaScript, React</li>
          <li>Tools: Git, Postman</li>
        </ul>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>Quick learner</li>
          <li>Self Motivated</li>
          <li>Hard Working</li>
        </ul>
      </section>

      <section className="section">
        <h2>Hobbies</h2>
        <ul>
          <li>Playing Chess</li>
          <li>Playing Cricket</li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p><strong>Phone:</strong> +91-9704771418</p>
        <p><strong>Email:</strong> pradeeperukulla1999@gmail.com</p>
        <p><strong>Location:</strong> Karimnagar, Telangana</p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Erukulla Pradeep. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
