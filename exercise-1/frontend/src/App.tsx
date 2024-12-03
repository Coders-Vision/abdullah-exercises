import { useState, useEffect } from "react";
import { Book } from "./types/book";
import BookForm from "./components/book-form";
import BookList from "./components/book-list";
import { addBook, deleteBook, getBooks, updateBook } from "./api/book-service";

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const fetchBooks = async () => {
    try {
      const booksData = await getBooks();
      setBooks(booksData);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  const handleAddBook = async (book: Book) => {
    try {
      const newBook = await addBook(book);
      setBooks([...books, newBook]);
    } catch (error) {
      console.error("Failed to add book:", error);
    }
    fetchBooks();
  };

  const handleUpdateBook = async (book: Book) => {
    try {
      if (!selectedBook) return;
      const updatedBook = await updateBook(selectedBook.id!, book);
      setBooks(books.map((b) => (b.id === selectedBook.id ? updatedBook : b)));
      setSelectedBook(null);
    } catch (error) {
      console.error("Failed to update book:", error);
    }
    fetchBooks();
  };

  const handleDeleteBook = async (id: string) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
    fetchBooks();
  };

  const handleFormSubmit = (book: Book) => {
    selectedBook ? handleUpdateBook(book) : handleAddBook(book);
  };

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
  };

  const handleDelete = (id: string) => {
    handleDeleteBook(id);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-2xl font-bold text-center mb-6">Book Store</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/4">
          <BookForm onSubmit={handleFormSubmit} selectedBook={selectedBook} />
        </div>
        <div className="w-full lg:w-3/4">
          <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
