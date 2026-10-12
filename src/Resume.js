import PDF from './resume.pdf'

const Resume = () => {

  const blackDot = '\u25CF';
  const usePDF = false;

   return (
    <div className="resume">
      {!usePDF && <div className="html-resume">
        <div className="header">
          <h1>Ashcon Minoo</h1>
          <p>Federal Way, WA {blackDot} U.S. Citizen {blackDot}
          <a href="mailto:acminoo95@gmail.com" target="_blank" rel="noreferrer"> acminoo95@gmail.com </a>
          {blackDot} 253-951-1134
          <br />
          <a href="https://linkedin.com/in/ashcon-minoo-533316114/" target="_blank" rel="noreferrer">linkedin.com/in/ashcon-minoo-533316114</a> {blackDot}
          <a href="https://github.com/aminoo10" target="_blank" rel="noreferrer"> github.com/aminoo10</a></p>
          <p className="summary">Computer Science graduate and PC builder since age 14, with experience in release management,
            cloud infrastructure, and full-stack development. Led 200+ production deployments at TD Bank; spec and build
            systems for friends and family and run Linux daily.</p>
        </div>

        <div className="pro-experience">
          <h4>PROFESSIONAL EXPERIENCE</h4>
          <hr id="hr-3"/>
          <div>
            <strong>Individual Provider (Caregiver)</strong> — Consumer Direct Care Network WA / DSHS
            <span className="float-right">2025 – Present</span>
            <ul>
              <li>Provide in-home care for two clients under state-authorized care plans; coordinate schedules and
                appointments and log service hours for DSHS.</li>
            </ul>
          </div>
          <div>
            <strong>Freelance Illustrator &amp; Self-Published Comic Artist</strong>
            <span className="float-right">2024 – Present</span>
            <ul>
              <li>Take paid art commissions from quote to delivery, and write, illustrate, and self-publish original comics.</li>
            </ul>
          </div>
          <div>
            <strong>Deployment Lead</strong> — TD Bank, Mount Laurel, NJ
            <span className="float-right">Mar 2023 – Sep 2024</span>
            <ul>
              <li>Led 200+ production deployments for TD’s Customer Identity &amp; Access Management product family
                across multiple development teams.</li>
              <li>Wrote the Deployment Lead best-practices guide and trained new hires on SAFe release planning.</li>
              <li>Built a Next.js change-order tracker to replace a spreadsheet-based release process.</li>
            </ul>
          </div>
          <div>
            <strong>Cloud Application Developer</strong> — Weyerhaeuser, Seattle, WA
            <span className="float-right">Jan 2019 – Jan 2020</span>
            <ul>
              <li>Provisioned SQL Server instances and migrations, and built tooling to automate SQL Server installation.</li>
              <li>Deployed Azure infrastructure and automated access-log auditing through Azure DevOps.</li>
              <li>Created the functional-testing workflow and documentation used by application developers.</li>
            </ul>
          </div>
        </div>

        <div className="projects">
          <h4>PROJECTS</h4>
          <hr id="hr-4"/>
          <div>
            <strong className="project-header">Obfuscated Resonance</strong> — Godot 4, GDScript
            <span className="float-right">In development</span>
            <ul>
              <li>Arcade puzzle game mixing bubble-shooter play, timed quizzes, and branching visual-novel cutscenes;
                all pixel art drawn by hand.</li>
              <li>Built a deterministic ray-sweep shot simulator on a hex grid that computes each shot’s landing cell
                before it fires, so aim previews always match results and lay the groundwork for networked play.</li>
              <li>Designed all game systems independently; used Claude Code for AI-assisted testing, debugging, and prototyping.</li>
            </ul>
          </div>
          <p><strong className="project-header">AMLookup</strong> — Nuxt/Vue site that searches anime and manga titles
            through the Jikan (MyAnimeList) REST API, filterable by medium.</p>
        </div>

        <div className="technical-skills">
          <h4>TECHNICAL SKILLS</h4>
          <hr id="hr-2"/>
          <p><strong>Hardware &amp; Systems:</strong> PC building and custom specs, NAS build (in progress), Linux (Arch-based),
            Windows, GPU driver troubleshooting<br />
          <strong>Languages:</strong> JavaScript, TypeScript, Python, GDScript, Java, C#, C, SQL, PowerShell, HTML/CSS<br />
          <strong>Frameworks &amp; Tools:</strong> React, Next.js, Vue/Nuxt, Spring, Tailwind CSS, GraphQL, Azure, Azure DevOps,
            Jira, ServiceNow, SQL Server, Git, Godot, Claude Code, Photoshop, Figma, Blender<br />
          <strong>Certifications:</strong> SAFe 6 Agilist</p>
        </div>

        <div className="education">
          <h4>EDUCATION</h4>
          <hr id="hr-1"/>
          <p><strong>B.S., Computer Science &amp; Systems</strong> — University of Washington Tacoma
            <span className="float-right">Dec 2016</span><br />
          <strong>Certificate in Front-End Web Development</strong> — University of Washington
            <span className="float-right">2021</span></p>
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
