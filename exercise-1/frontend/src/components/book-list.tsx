import { Book } from "../types/book";

interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

function BookList({ books, onDelete, onEdit }: BookListProps) {
  return (
    <div className="mx-2">
      {Array.isArray(books) &&
        books?.map((book) => (
          <div key={book.id} className="bg-gray-100 p-4 rounded shadow-md mb-4">
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">ISBN: {book.isbn}</p>
            <p className="text-gray-600">
              Published Year: {book.publishedYear}
            </p>
            <p className="text-gray-600">Publisher: {book.publisher}</p>
            <p className="text-gray-600">Price: ${book.price}</p>
            <p className="text-gray-600">Stock: {book.stock}</p>
            <p className="text-gray-600">Description: {book.description}</p>
            <div className="mt-2">
              <button
                onClick={() => onEdit(book)}
                className="px-4 py-2 bg-yellow-400 text-white rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(book.id!)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookList;
