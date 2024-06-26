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
            Deployment Lead <br />

            <ul>
              <li>Led the management and implementation of production software deployments and 
                improved release standards within multiple development teams part TD’s 
                Customer Identity & Access Management Product Family.</li>
              <li>Created Deployment Lead best practices, as well as trained and consulted new hires on strategies 
                for successful deployment planning within software development teams through the Scaled Agile Framework.</li>
              <li>Engaged in interpersonal communication with development teams to manage resources for upcoming releases 
                of software projects to meet timelines and exceed stakeholder expectations.</li>
            </ul>
          </div>
          <div>
          <strong>Weyerhaeuser - Seattle, WA</strong>
          <span className="float-right">Jan 2019 - Jan 2020</span><br />
          Cloud Application Developer <br />

          <ul>
            <li>Configured and deployed SQL Server, database migrations, and database/server functions per service request by application 
              stewards and corporate function development teams, built tools to assist in automating this process of SQL Server creation 
              and installation.</li>
            <li>Deployed infrastructure, and documented new cloud technology topics, consulting team executives on new available technologies 
              that the corporate technology infrastructure could take advantage of. Built cloud applications with Azure and automated auditing 
              access logs through Azure DevOps.</li>
            <li>Developed application-testing workflow and documentation of functional testing. provided helpful aid for the application developers 
              in regard to acceptance criteria, functionality, and bug documentation.</li>
          </ul>
          </div>
        </div>
        <div className="technical-skills">
          <h4>TECHNICAL SKILLS</h4>
          <hr id="hr-2"/>
          <p><span id="indent-1">Languages:</span> JavaScript, Java, C, CSS3, HTML5, PowerShell, SQL, C#, Python, TypeScript <br />
          <span id="indent-2">Frameworks:</span> Spring, React JS, Vue.js, GitHub, Microsoft Azure, GraphQL, Next.JS, Redux.js <br />
          <span id="indent-3">Tools:</span> Photoshop, Version Control (git), Visual Studio Code, Figma, Blender, GraphQL, NPM</p>
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
            <li>A calculator web app built using Next.js, HTML, and SASS. made by reverse-engineering calculator backend logic, 
              as well as researching design implementations for front-end animations, styles, and functionalities.</li>
          </ul>

          <strong className="project-header">Portfolio Website (the one you're on right now!!)</strong>
          <ul>
            <li> Portfolio website built with React, as a site to showcase applications and a platform for UI design, graphic design, and other professional resources.. 
              Features links to projects as well as a link to the github repository as well.</li>
            <li>Features links to projects as well as a link to the github repository, as well as other opportunities to 
              test and play around with React in.</li>
          </ul>

          <strong className="project-header">AMLookup</strong>
          <ul>
            <li>Website using the Nuxt/Vue framework, fetches requests through a RESTful API that accesses data from the website MyAnimeList, Jikan. </li>
            <li>Made for the purpose of querying and listing information on Anime and Manga title listings and displaying information on said listings. 
              Options available for defining type of search to Video medium, or Print medium.</li>
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