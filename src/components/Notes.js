import React from 'react';
import './Notes.css';
import Side from './Side';
import Main from './Main';
import { uuid } from "uuidv4";
import {useEffect,useState} from "react";
import Navbar from './Navbar';



function Notes() {
    const [notes,setNotes]=useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
      
    const[activeNote,setActiveNote]=useState(false);
  
    useEffect(() => {
  localStorage.setItem("notes",JSON.stringify(notes))
    }, [notes]);
  
  
   const onAddNote = () => {
       const newNote ={
         id: uuid(),
        title: "Untitled Note",
        body: "",
        lastModified: Date.now(),
       };
  
       setNotes([newNote,...notes]);
      };
  
        const onUpdateNote = (updatedNote) => {
         const updatedNotesArray =notes.map((note) => {
           if(note.id === activeNote){
              return updatedNote
           }
          return note;
         });
          setNotes(updatedNotesArray);
        };
  
  
  
      const onDeleteNote = (idToDelete) =>{
        setNotes(notes.filter((note) => note.id !== idToDelete));
      }
  
      const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
      };
  
    return (
        <>
        <Navbar />
      <div className="Notes">
        <Side
         notes={notes} 
         onAddNote={onAddNote} 
         onDeleteNote={onDeleteNote}
         activeNote={activeNote}
         setActiveNote={setActiveNote}
         /> 
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
      </>
    );
  }
  
  export default Notes;
  