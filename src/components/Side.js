import './Notes.css'

function Side({notes,onAddNote,onDeleteNote,activeNote,setActiveNote}){

const sortedNotes= notes.sort((a,b) => b.lastModified-a.lastModified);

return(
<div className="app-sidebar">
<div className="app-sidebar-header">
<h1>Notes</h1>
<button onClick={onAddNote} id="b1">ADD</button>
</div>
<div className="app-sidebar-notes">
    
    {sortedNotes.map((note) => (
        <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
      <div className="sidebar-note-title">
        <strong id="st1">{note.title}</strong>
        <button onClick={() => onDeleteNote(note.id)} id="b2">DELETE</button>
      </div>


        <p className="notessidebarp">{note.body && note.body.substr(0,100)+ "..."}</p>
        <small className="note-meta">
            Last modified {new Date(note.lastModified).toLocaleDateString("en-GB",{
              hour: "2-digit",
              minute: "2-digit",
            })}
        </small>

    </div>
 
    ))}
    
         
        
</div>
</div>);
}
export default Side;