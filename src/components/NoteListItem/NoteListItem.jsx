import React from "react";
// import { now } from "mongoose";
import "./NoteListItem.css"

export default function NoteListItem({ n }) {
  const date = new Date(n.createdAt).toLocaleDateString();
  console.log(date)
  return (
    <div className="NotListItem">
      <div>Created on: {date}</div>
      <div>{n.text}</div>
    </div>
  );
}