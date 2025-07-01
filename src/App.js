import React from 'react';
import './App.css';
import profilePic from './profile.jpg';
import './index.css';

function App() {
  return (
    <div className="App min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="header text-center p-6 bg-blue-100 shadow-md">
        <img
          src={profilePic}
          alt="Erukulla Pradeep"
          className="profile-pic w-32 h-32 mx-auto rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-4">Erukulla Pradeep</h1>
        <p className="text-lg text-blue-700">Frontend Developer</p>
        <a
          href="/resume.pdf"
          download
          className="download-btn inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          📄 Download Resume
        </a>
      </header>

      <main className="px-6 py-8 space-y-10">
        <section className="section">
          <h2 className="text-2xl font-semibold mb-2">Career Objective</h2>
          <p>
            Aspiring Web Developer with a strong foundation in HTML, CSS, JavaScript, and React, seeking an opportunity to create modern, responsive websites and contribute to innovative front-end solutions.
          </p>
        </section>

        // <section className="section">
        //   <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        //   <h3 className="font-bold">Associate Software Engineer (Intern) - Ronex Technologies, Karimnagar (1 year)</h3>
        //   <ul className="list-disc list-inside ml-4">
        //     <li>Developed and maintained responsive web pages.</li>
        //     <li>Fixed bugs and optimized website performance.</li>
        //     <li>Collaborated with backend developers for API integration.</li>
        //     <li>Ensured cross-browser compatibility and responsiveness.</li>
        //   </ul>
        // </section>

        <section className="section">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>B.Tech:</strong> Malla Reddy College of Engineering, Hyderabad (CSE)</li>
            <li><strong>Intermediate (MPC):</strong> TS Model School and Junior College</li>
            <li><strong>SSC:</strong> Vivekananda High School, Chigurumamidi</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Web Developer - Technology Institute, HYD</li>
            <li>Front-end: HTML, CSS, JavaScript, React</li>
            <li>CSS Frameworks: Bootstrap, Tailwind CSS</li>
            <li>Tools: Git, Postman</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Personal Portfolio Website</strong><br />
              Tech Stack: HTML, CSS, React, Vercel, Git<br />
              <a className="text-blue-500 hover:underline" href="https://erukullapradeep-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a> | <a className="text-blue-500 hover:underline" href="https://github.com/erukullapradeep/pradeep-portfolio-" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <strong>To-Do List Web Application</strong><br />
              Tech Stack: HTML, Tailwind CSS, JavaScript, React<br />
              <a className="text-blue-500 hover:underline" href="https://to-d0-app-erukullapradeeps-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a> | <a className="text-blue-500 hover:underline" href="https://github.com/erukullapradeep/To-D0-app" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <strong>Simple Calculator</strong><br />
              Tech Stack: HTML, JavaScript, Bootstrap<br />
              <a className="text-blue-500 hover:underline" href="https://calculator-git-main-erukullapradeeps-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a> | <a className="text-blue-500 hover:underline" href="https://github.com/erukullapradeep/Calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Quick learner</li>
            <li>Self-motivated</li>
            <li>Hard working</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="text-2xl font-semibold mb-2">Hobbies</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Playing Chess</li>
            <li>Playing Cricket</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p><strong>Phone:</strong> +91-9704771418</p>
          <p><strong>Email:</strong> pradeeperukulla1999@gmail.com</p>
          <p><strong>Location:</strong> Karimnagar, Telangana</p>
        </section>
      </main>

      <footer className="footer text-center bg-blue-100 p-4 text-sm">
        <p>&copy; 2025 Erukulla Pradeep. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
