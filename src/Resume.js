import PDF from './resume.pdf'

const Resume = () => {

  const usePDF = false;

  return ( 
    <div className="resume">
      {!usePDF && <div className="html-resume">      <h1>Ashcon Minoo</h1>
        <p>acminoo95@gmail.com <br />(253)951-1134 <br /><a href="https://github.com/aminoo10" target="_blank" rel="noreferrer">https://github.com/aminoo10</a></p>
        <hr />
        <h2>Education</h2>
        <p><i>University of Washington Tacoma - <strong>Bachelor of Science in Computer Science &amp; Systems</strong></i></p>
        <p><i>University of Washington - <strong>Certificate in Front-End Web Development</strong></i></p>
        <hr />
        <h2>Skills &amp; Experience</h2>
        <ul>
          <li><p>Experience and exposure to languages in Object-Oriented Design: C, Java, SQL, and Javascript</p></li>
          <li><p>Experience in web development utilizing HTML, CSS, JS, Jquery, preprocessors (sass), and frameworks (Vue/Nuxt). Continuing to expand knowledge with other frameworks and technologies (React)</p></li>
          <li><p>Fast learner, adaptive, proactive. Project development experience through AGILE workflow.</p></li>
        </ul>
        <hr />
        <h2>Work Experience</h2>
        <h3>IT Internship at Weyerhaeuser</h3> 
        <p>Seattle, WA.  <strong>Working in three roles:</strong> Jan 2019 - Jan 2020</p>
        <h4>Database Administration:</h4>
        <p>Part of the DBA team working on installing and setting up <strong>SQL Server</strong>, Database migrations, and database/server functions per service request by application stewards and corporate function development teams</p>
        <h4>DevOps:</h4>
        <p>Worked with the Cloud Applications team setting up apps for development teams, researching and documenting new possible cloud features to utilize, and working with <strong>Azure</strong> writing ARM template scripts and PaaS applications</p>
        <h4>Project Testing and Documentation:</h4>
        <ul>
          <li><p>Helping with Real Estate/Energy IT team to develop application-testing workflow and organization for testing.</p> </li>
          <li><p>Coordinating with project managers and developers on acceptance criterias, functionality, and bug documentation</p></li>
        </ul>
        <hr />
        <h2>Project Experience</h2>
        <h3>"Audit Logger"</h3>
        <p>Developed an Azure logic app to save audit records of accounts and subscriptions accessing Azure DevOps into Excel spreadsheets, and stored into an Azure storage account at the end of each day. This was extremely beneficial in the team and organization’s security and auditing of control systems.</p>
        <h3>"Front-end development API project"</h3>
        <p>A project using the <strong>Nuxt/Vue framework, Javascript, HTML, CSS</strong> that fetches requests through an API with the purpose of querying and listing information on Anime and Manga title listings.</p>
        <p><strong>Key Courses:</strong> Data Structures, <strong>C Programming</strong>, Design and Analysis of Algorithms, <strong>Software Development and QA, Database Systems</strong>, User-Computer Design Interface, Computational Worlds, <strong>Javascript and Advanced CSS.</strong></p>
      </div>}
      { usePDF && <div className="pdf-resume">
        <iframe title="My Resume" src={`${PDF}#toolbar=0&navpanes=0&scrollbar=0`} width="65%" height="1070px"> </iframe>
      </div> }  
    </div>
   );
}
 
export default Resume;