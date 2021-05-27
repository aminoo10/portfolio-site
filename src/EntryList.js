import Data from './data.json'

const EntryList = () => {
  return ( 
    <div className="entries">
      {
        Data.map (entry => (
          <div className="entry" key={entry.id}>
            <img src={entry.image} alt="app image preview" />
            <h2>{ entry.title }</h2>
            <p>{entry.description}</p>
            <a href={entry.link} target="_blank">Link</a>
            <a href={entry.github} target="_blank">Github</a>
          </div>
        ))}
    </div>
   );
}
 
export default EntryList;