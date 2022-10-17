import NotesList from "./NotesList"
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import Submit from "./Submit";
import { useState } from "react";
//selectall


const Note = ({ id, title, text, notes, setNotes }) => {
  const editNote = (e) => { 
    e.preventDefault();
    let note = notes.find(s => s.id === id);
    note.title = title2;
    note.text = text2;
   /*  let data = notes;
    let noteIndex = data.findIndex(s => s.id === id);
    data[noteIndex].title = title2;
    data[noteIndex].text = text2; */
    let data = notes.filter(s => s.id !== id);  
    setNotes([...data, note]);
    localStorage.setItem('notes', JSON.stringify([...data, note]));
    setEdit(false);
  };
  const deleteNote = () => {
    let data = notes.filter(item => item.id !== id)
    setNotes(data);
    localStorage.setItem("notes", JSON.stringify(data));
  };
  const [edit, setEdit] = useState(false);
  const [title2, setTitle2] = useState(title);
  const [text2, setText2] = useState(text);


  return (
    <form
      onSubmit={(e) => editNote(e)}
      className=" flex rounded-sm flex-col shadow-2xl  bg-white/10 backdrop-blur-[8px] font-semibold backdrop-saturate-10 min-h-[300px] h-fit "
    >
      {edit ? (
        <input value={title2} onChange={(e) => setTitle2(e.target.value)} />
      ) : (
        <div className="w-full bg-transparent text-center px-2 text-3xl font-[700] tracking-wider text-blue-900">
          {title}
        </div>
      )}
      <hr className="border-dashed border-blue-900 mt-1" />
      {edit ? (
        <input value={text2} onChange={(e) => setText2(e.target.value)} />
      ) : (
        <div className="w-[95%] bg-transparent px-8 text-left text-xl overflow-y-auto py-2 text-blue-900">
          {text}
        </div>
      )}
      {/*   <div className="flex mb-1 py-2 px-3 mt-auto gap-x-4"> */}
      <div className="flex mb-1 py-2 px-3 mt-auto ml-auto gap-x-4">
        <button type="submit" className="w-7">
          <Submit />
        </button>
         <EditIcon
            className="w-7 h-7 cursor-pointer"
            onClick={() => setEdit(true)}
          />
        <DeleteIcon
          className="w-7 h-7 cursor-pointer"
          onClick={() => deleteNote()}
        />
      </div>
    </form>
  );
};

export default Note;