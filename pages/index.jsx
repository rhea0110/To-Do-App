import React from "react";
import Button from "../components/Button";
import NotesList from "../components/NotesList";

const Index = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-sky-300 via-yellow-300 to-lime-400 flex items-center justify-center">
      <NotesList />
    </div>


  );
}


export default Index;