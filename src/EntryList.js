import Data from './data.json'

const EntryList = () => {
  return ( 
    <div className="entries">
      {
        Data.map (entry => (
          <div className="entry" key={entry.id}>
              <a href={entry.link} target="_blank" rel="noreferrer">
                <img src={entry.image} alt="preview of app" />
              </a>
            <div className="entry-info">
              <h2>{ entry.title }</h2>
              <p>{entry.description}</p>
              <a href={entry.github} target="_blank" rel="noreferrer">
                <img src="/images/github-square-brands.svg" class="github-logo" title={`${entry.title} github link`} alt="github"/>
              </a>
            </div>
          </div>
        ))} 
    </div>
   );
}
 
export default EntryList;