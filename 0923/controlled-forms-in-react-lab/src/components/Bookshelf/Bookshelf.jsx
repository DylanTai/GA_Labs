import { useState } from 'react'

const Bookshelf = () => {
  // 2) Define the initial state
  // - books: array of existing books to display
  // - newBook: object that mirrors the form inputs (controlled inputs)
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ])
  const [newBook, setNewBook] = useState({ title: '', author: '' })

  // 3a) handleInputChange — keep UI and state in sync as the user types
  const handleInputChange = (e) => {
    const { name, value } = e.target
    // Create a new object; preserve the other field using spread.
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // 3b) handleSubmit — add the new book and reset the form
  const handleSubmit = (e) => {
    e.preventDefault()

    // Tiny bit of UX polish: ignore empty titles or authors.
    const trimmedTitle = newBook.title.trim()
    const trimmedAuthor = newBook.author.trim()
    if (!trimmedTitle || !trimmedAuthor) {
      // Early-exit: don't add empty rows.
      return
    }

    // Append to books immutably.
    setBooks((prev) => [...prev, { title: trimmedTitle, author: trimmedAuthor }])

    // Reset form fields.
    setNewBook({ title: '', author: '' })
  }

  // 1) Base component structure & 4) Form creation
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        {/* Controlled form: inputs read from state and write back via onChange */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g., The Hobbit"
            value={newBook.title}
            onChange={handleInputChange}
            aria-label="Book title"
          />

          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            placeholder="e.g., J.R.R. Tolkien"
            value={newBook.author}
            onChange={handleInputChange}
            aria-label="Book author"
          />

          <button type="submit" style={{ marginTop: 10 }}>Add to Shelf</button>
        </form>
      </div>

      {/* 5) Map through books and render simple cards */}
      <div className="bookCardsDiv">
        {books.map((book, idx) => (
          <div className="bookCard" key={`${book.title}-${book.author}-${idx}`}>
            <strong>{book.title}</strong>
            <span style={{ fontStyle: 'italic' }}>{book.author}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf
