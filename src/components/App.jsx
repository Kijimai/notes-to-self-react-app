import React from "react"
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import notes from "../notes"

function createNote(note) {
  return(
    <Note
      key={note.id}
      name={note.name}
      content={note.content}
    />
  )
}

function App() {
  return(
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  )
}

export default App