import React, { useState, useEffect } from 'react';
import { BsSearch, BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NoteItem from '../commponents/NoteItem';
import { AiOutlineCloseSquare } from 'react-icons/ai';

function Notes({ notes }) {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    handleSearch();
  }, [text]);

  const handleSearch = () => {
    const searchText = text.toLowerCase();
    setFilteredNotes(notes.filter(note => note.title.toLowerCase().includes(searchText)));
  };

  return (
    <div>
      <section>
        <header className="notes__header">
          {!showSearch && <h2>My Notes</h2>}
          {showSearch && (
            <input
              type="text"
              autoFocus
              placeholder="Keyword..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          )}
          <button className="btn" onClick={() => setShowSearch(prevState => !prevState)}>
            {!showSearch?<BsSearch /> : <AiOutlineCloseSquare/>}
          </button>
        </header>
        <div className="notes__container">
          {filteredNotes.length === 0 && <p className='empty__notes'>No Notes Found</p>}
          {filteredNotes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
        <Link to="/create-note" className="btn add__btn">
          <BsPlusLg />
        </Link>
      </section>
    </div>
  );
}

export default Notes;
