import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  // ノートを追加する関数
  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now()
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }
  
  // ノートを削除する関数
  const onDeleteNote = (id) => {
    // 削除対象ノート以外をfilterNotesに格納
    const filterNotes = notes.filter((note) => note.id !== id );
    // 削除対象ノート以外をセットする
    setNotes(filterNotes);
  }
  
  // 選択されたノートを取得する関数
  const getActiveNote = () => {
    return notes.find((note) => note.id == activeNote);
  }

  return (
    <div className="App">
      <Sidebar 
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} />
    </div>
  )
}

export default App
