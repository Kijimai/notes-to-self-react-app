import React from "react"

function Note(props) {
  return (
    <div class="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default Note