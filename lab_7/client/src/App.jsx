import React, { useState, useEffect } from 'react';
import { Book, Trash2, Edit, Plus, Save, X } from 'lucide-react';
import './App.css'; 

const API_URL = 'http://localhost:4999/books';

export default function App() {

  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({ title: '', author: '' });
  const [isEditing, setIsEditing] = useState(null);
  const [notification, setNotification] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error loading books:', error);
      showNotify('Error loading books from server');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const showNotify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  // INPUT CHANGE
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // CREATE
  const handleAddBook = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        fetchBooks(); 
        setFormData({ title: '', author: '' });
        showNotify('Book added successfully!');
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // PREPARE EDIT
  const startEdit = (book) => {
    setIsEditing(book.id);
    setFormData({ title: book.title, author: book.author });
  };

  // CANCEL EDIT
  const cancelEdit = () => {
    setIsEditing(null);
    setFormData({ title: '', author: '' });
  };

  // UPDATE
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${isEditing}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        fetchBooks(); 
        setIsEditing(null);
        setFormData({ title: '', author: '' });
        showNotify('Book updated successfully!');
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  // DELETE
  const handleDeleteBook = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchBooks(); // Refresh list from server
        showNotify('Book deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        
        <header>
          <h1>
            <Book className="header-icon" size={32} />
            Library Management
          </h1>
        </header>

        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}

        {/* Form Card */}
        <div className="card">
          <h2 className="form-title">
            {isEditing ? <Edit size={20} /> : <Plus size={20} />}
            {isEditing ? 'Edit Book' : 'Add New Book'}
          </h2>
          
          <form onSubmit={isEditing ? handleUpdateBook : handleAddBook}>
            <div className="form-group">
              <label>Book Title</label>
              <input
                className="form-input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter book title"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Author</label>
              <input
                className="form-input"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Enter author name"
                required
              />
            </div>

            <div className="button-group">
              <button
                type="submit"
                className={`btn ${isEditing ? 'btn-warning' : 'btn-primary'}`}
              >
                {isEditing ? <><Save size={18}/> Update Book</> : <><Plus size={18}/> Add Book</>}
              </button>
              
              {isEditing && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List Card */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="list-header">
            <h2>Book List</h2>
          </div>
          
          {books.length === 0 ? (
            <div className="empty-message">
              No books available. Add one above!
            </div>
          ) : (
            <ul className="book-list">
              {books.map((book) => (
                <li key={book.id} className="book-item">
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                  </div>
                  
                  <div className="action-buttons">
                    <button
                      onClick={() => startEdit(book)}
                      className="icon-btn btn-edit"
                      title="Edit"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteBook(book.id)}
                      className="icon-btn btn-delete"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
      </div>
    </div>
  );
}