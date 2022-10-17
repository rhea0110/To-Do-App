import React from "react";
import SearchIcon from "./SearchIcon";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Note from "./Note";
import PlusIcon from "./PlusIcon";

/*   new Array(50).fill(0).map((el, index) => {
    return {
      id: uniqid(),
      title: `Note - ${(index += 1)}`,
      text: "random text writing for text",
    };
  }); */
const NotesList = (props) => {
    const [notes, setNotes] = useState(
      []
  );
  const showResults = () => {
  

    if (searchQuery === '') {
      window.location.reload();
    } 
    let data = notes.filter(note1 => {
      if (note1.title.includes(searchQuery) || note1.text.includes(searchQuery))
        return true;
      else
        return false;
    })
    setNotes(data);
  }

  useEffect(() => { 
  setNotes(localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [])
  }, [] )
    const [searchQuery, setSearchQuery] = useState('');
    const addNote = () => {
        const newNotes = [...notes];
        newNotes.unshift({
            id: uniqid(),
            text: 'Add notes',
            title: 'Add a title',
        })
      setNotes(newNotes);
      localStorage.setItem('notes', JSON.stringify(newNotes));
    }
    return (
      <div className="w-full min-h-screen">
        <h1 className="text-blue-900 font-medium text-5xl tracking-wide text-center mb-4">
          Post Notes
        </h1>

        <div className="flex flex-col lg:flex-row relative rounded-sm text-blue-900 font-semibold items-center border-2 border-blue-900 mx-auto w-full sm:w-[50%] h-[13vh] lg:h-[40px] backdrop-blur-[8px] backdrop-saturate-100">
          <PlusIcon
            className="w-[35px] right-0 translate-x-[150%] backdrop-blur-[8px] ease-in backdrop-saturate-10 hover:scale-150 transition-all hover:cursor-pointer absolute text-blue-900 -mt-[18px]"
            onClick={() => addNote()}
          />
          <SearchIcon className="w-6 h-6 ml-2 " placeholder="Search " />
          <input
            type="Search"
            className="bg-transparent outline-none flex flex-grow indent-2 placeholder-blue-900"
            placeholder="Search by a keyword"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={showResults} className="">
            <img
              src="binoculars.png"
              alt="Search"
              className="w-10 border-l-2 border-blue-900 p-1"
            />
          </button>
        </div>
        {/*notes*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-[50px] gap-x-8 p-12 ">
          {notes.map(({ id, title, text }) => {
            return (
              <div key={id}>
                <Note
                  id={id}
                  title={title}
                  text={text}
                  notes={notes}
                  setNotes={setNotes}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default NotesList;