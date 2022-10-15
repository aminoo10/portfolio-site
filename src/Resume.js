import PDF from './resume.pdf'

const Resume = () => {

  const blackDot = '\u25CF';
  const usePDF = false;

  return ( 
    <div className="resume">
      {!usePDF && <div className="html-resume">      
        <div className="header">
          <h1>Ashcon Minoo</h1>
          <p>Seattle, Washington {blackDot} 
          <a href="mailto:acminoo95@gmail.com" target="_blank" rel="noreferrer"> acminoo95@gmail.com </a> 
          {blackDot} 253-951-1134 {blackDot} 
          <a href="https://linkedin.com/in/ashcon-minoo-533316114/" target="_blank" rel="noreferrer"> linkedin.com/in/ashcon-minoo-533316114/</a> {blackDot}
          <br /><a href="https://github.com/aminoo10" target="_blank" rel="noreferrer">github.com/aminoo10</a></p>
          <i>Fast learner, adaptive, and proactive.</i>
        </div>
        <div className="education">
          <h4>EDUCATION</h4>
          <hr id="hr-1"/>
          <p><strong>University of Washington, Seattle, WA</strong>
          <span className="float-right">Jan 2021</span> <br />
          Certificate in Front-end Web Development</p>
          
          <p><strong>University of Washington Tacoma, Tacoma, WA</strong> <br />
          Bachelor of Science in Computer Science &amp; systems <br />
          <i>Relevant coursework:</i> Software Engineering, Discete Mathematics, Data Structures, Design and Analysis of Algorithms</p>
          
        </div>
        <div className="technical-skills">
          <h4>TECHNICAL SKILLS</h4>
          <hr id="hr-2"/>
          <p><span id="indent-1">Languages:</span> Javascript, Java, C, CSS3, HTML5, PowerShell, SQL <br />
          <span id="indent-2">Frameworks:</span> Bootstrap, ReactJS, Vue.JS, GitHub, Microsoft Azure <br />
          <span id="indent-3">Tools:</span> Photoshop, Git, Visual Studio Code</p>
        </div>
        <div className="pro-experience">
          <h4>PROFESSIONAL EXPERIENCE</h4>
          <hr id="hr-3"/>
          <strong>Weyerhaeuser - Seattle, WA</strong>
          <span className="float-right">Jan 2019 - Jan 2020</span><br />
          Intern <br />

          <ul>
            <li> Worked with the DBA Team to install and set-up SQL Server, database migrations, and database/server functions 
              per service request by application stewards and corporate function development teams, worked throughout the year 
              migrating data and services, keeping software up-to-date for prevention of security vulnerabilities.</li>
            <li> Worked with the Cloud Applications Team setting up apps, researching and documenting new cloud technology topics, 
              and working with Azure writing ARM template scripts and PaaS applications for auditing access and authentication of Azure 
              DevOps. Helped management in understanding new available technologies our teams can take advantage of, which helped alleviate 
              costs in terms of subscription services.</li>
            <li> Helped the Real Estate/Energy team develop application-testing workflow and organization for testing. Coordinated with project 
              managers and developers on acceptance criteria, functionality, and bug documentation which became helpful aids for the application 
              developers and other participants of application testing.</li>
          </ul>
        </div>
        <div className="projects">
          <h4>PROJECTS</h4>
          <hr id="hr-4"/>
          <strong className="project-header">Front-end development API project</strong>
          <span className="float-right">Dec 2020 - Jan 2021</span>
          <ul>
            <li>Developed a project using the Nuxt/Vue framework, Javascript, HTML, and CSS, that fetches requests through an unofficial API for the website MyAnimeList, JIkan. </li>
            <li>Made with the purpose of querying and listing information on Anime and Manga title listings, and displaying info related to their content. Options available for 
              searching for specific types of medium (Video medium, and Print medium)</li>
          </ul>
          <strong className="project-header">Portfolio Website (the one you're on right now!!)</strong>
          <span className="float-right">Sep 2021 - Dec 2021 </span>
          <ul>
            <li> A Portfolio website made using the ReactJS framework, Javascript, HTML, and CSS to showcase applications I’ve made and other resources for professional use. 
              Made relatively quick and easily and was a great opportunity at UI layout/logo design.</li>
            <li>Features links to the applications as well as a Github link to the source code as well. Contains an about-me section and a page with a copy of my resume for professional engagement.</li>
          </ul>
        </div>
        
      </div>}
      { usePDF && <div className="pdf-resume">
        <iframe title="My Resume" src={`${PDF}#toolbar=0&navpanes=0&scrollbar=0`} width="65%" height="1070px"> </iframe>
      </div> }  
      <a id="download-button" href={PDF} download="Ashcon_Minoo_Resume.pdf">Download Resume</a>
    </div>
   );
}
 
export default Resume;