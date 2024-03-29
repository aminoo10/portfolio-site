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
          <span>
            <a href="mailto:acminoo95@gmail.com" target="_blank" rel="noreferrer"> acminoo95@gmail.com </a>/
          </span>
          {blackDot} 253-951-1134 {blackDot} 
          <br />
          <a href="https://linkedin.com/in/ashcon-minoo-533316114/" target="_blank" rel="noreferrer"> LinkedIn</a> {blackDot}
          <a href="https://github.com/aminoo10" target="_blank" rel="noreferrer"> GitHub</a></p>
          <i>Fast learner, adaptive, and proactive.</i>
        </div>
        <div className="pro-experience">
          <h4>PROFESSIONAL EXPERIENCE</h4>
          <hr id="hr-3"/>
          <div>
            <strong>TD Bank - Mount Laurel, NJ</strong>
            <span className="float-right">Mar 2023 - Present</span><br />
            Full-Stack Contractor <br />

            <ul>
              <li>Worked on the Enterprise Deployment team as a Deployment Lead and led the creation and implementation of production software 
                deployments for TD Bank enterprise and customer products, within the Authentication group.</li>
                <li>Documented standards for deployment lead practice within the Authentication team, as well 
                  as shadowed for and trained new team members</li>
            </ul>
          </div>
          <div>
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
        </div>
        <div className="technical-skills">
          <h4>TECHNICAL SKILLS</h4>
          <hr id="hr-2"/>
          <p><span id="indent-1">Languages:</span> JavaScript, Java, C, CSS3, HTML5, PowerShell, SQL, C#, Python, TypeScript, Golang <br />
          <span id="indent-2">Frameworks:</span> Spring, React JS, Vue.js, GitHub, Microsoft Azure <br />
          <span id="indent-3">Tools:</span> Photoshop, Git, Visual Studio Code, Visual Studio, Unity, IntelliJ, Figma, Adobe XD, Blender</p>
        </div>
        <div className="education">
          <h4>EDUCATION</h4>
          <hr id="hr-1"/>

          <p><strong>University of Washington Tacoma, Tacoma, WA</strong> <br />
          Bachelor of Science in Computer Science &amp; systems <br />
          <i>Relevant coursework:</i> Software Engineering, Discrete Mathematics, Data Structures, Design and Analysis of Algorithms</p>
          
        </div>
        <div className="projects">
          <h4>PROJECTS</h4>
          <hr id="hr-4"/>
          <strong className="project-header">Front-end Calculator Project</strong>
          <ul>
            <li>A calculator web app built using Next.js, HTML, and CSS with pre-processors.</li>
            <li>Made as practice for working with front-end UI prompts, as well as for understanding calculator backend logic</li>
          </ul>

          <strong className="project-header">Portfolio Website (the one you're on right now!!)</strong>
          <ul>
            <li> A Portfolio website built using the ReactJS frameworkas a site to showcase applications I’ve made and other resources for professional use.</li>
            <li>Features links to the applications as well as a Github link to the source code as well. Contains an about-me section and a page with a copy of my resume for professional engagement.</li>
          </ul>

          <strong className="project-header">AMLookup</strong>
          <ul>
            <li>Developed a project using the Nuxt/Vue framework, Javascript, HTML, and CSS, that fetches requests through an unofficial API for the website MyAnimeList, JIkan. </li>
            <li>Made with the purpose of querying and listing information on Anime and Manga title listings, and displaying info related to their content. Options available for 
              defining type of search (Video medium, and Print medium)</li>
          </ul>
        </div>
        
      </div>}
      { usePDF && <div className="pdf-resume">
        <iframe title="My Resume" src={`${PDF}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="1070px"> </iframe>
      </div> }  
      <a id="download-button" href={PDF} download="Ashcon_Minoo_Resume.pdf">Download Resume</a>
    </div>
   );
}
 
export default Resume;