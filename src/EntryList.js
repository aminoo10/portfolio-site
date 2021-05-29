import Data from './data.json'

const EntryList = () => {
  return ( 
    <div className="entries">
      {
        Data.map (entry => (
          <div className="entry" key={entry.id}>
            {/* <div className="entry-picture"> */}
              <a href={entry.link} target="_blank" rel="noreferrer">
                <img src={entry.image} alt="preview of app" />
              </a>
            {/* </div> */}
            {/* <div className="entry-info"> */}
              <h2>{ entry.title }</h2>
              <p>{entry.description}</p>
              <a href={entry.github} target="_blank" rel="noreferrer">Github</a>
            {/* </div> */}
          </div>
        ))} 
    </div>
   );
}
 
export default EntryList;