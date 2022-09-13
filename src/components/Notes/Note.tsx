import React from "react";
import "./_Notes.css";

interface Props {
  date: string | number;
  content: string;
  Color:string
}

function Note({ date, content,Color }: Props) {
  return (
    <li>
      <button className="note" style={{backgroundColor:Color}}>
        <div className="content">{content}</div>
        <div className="date">{date.toLocaleString()}</div>
      </button>
    </li>
  );
}

export default Note;
