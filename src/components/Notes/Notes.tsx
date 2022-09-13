import React, { useState, useEffect } from "react";
import { getNotesFromLocalStorage } from "../../Utils/NotesCURD";
import Note from "./Note";
import "./_Notes.css";

function Notes() {
  const [notes, setnotes] = useState([] as any);

  useEffect(() => {
    getNotesFromLocalStorage().then((data) => {
      // setnotes(data || []);
      setnotes([
        {
          content:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, molestias.",
          date: new Date(),
          backgroundColor: "cadetblue",
        },
        {
          content:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, molestias.",
          date: new Date(),
          backgroundColor: "#fec971",
        },
        {
          content:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, molestias.",
          date: new Date(),
          backgroundColor: "#ec618c",
        },
      ]);
    });
  }, []);

  return (
      <ul className="notes-list">
        {notes.map((note: any, key: number) => (
          <Note
            Color={note.backgroundColor}
            date={note.date}
            content={note.content}
          ></Note>
        ))}
      </ul>
  );
}

export default Notes;
