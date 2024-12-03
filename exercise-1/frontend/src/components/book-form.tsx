import React, { useEffect, useState } from "react";
import { Book } from "../types/book";

interface BookFormProps {
  onSubmit: (book: Book) => void;
  selectedBook: Book | null;
}

function BookForm({ onSubmit, selectedBook }: BookFormProps) {
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    isbn: "",
    description: "",
    publishedYear: 0,
    publisher: "",
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      setBook({
        title: "",
        author: "",
        isbn: "",
        description: "",
        publishedYear: 0,
        publisher: "",
        price: 0,
        stock: 0,
      });
    }
  }, [selectedBook]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]:
        name === "publishedYear" || name === "price" || name === "stock"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(book);
    setBook({
      title: "",
      author: "",
      isbn: "",
      description: "",
      publishedYear: 0,
      publisher: "",
      price: 0,
      stock: 0,
    });
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded shadow-md"
      >
        {[
          {
            label: "Title",
            name: "title",
            type: "text",
            value: book.title,
          },
          {
            label: "Author",
            name: "author",
            type: "text",
            value: book.author,
          },
          { label: "ISBN", name: "isbn", type: "text", value: book.isbn },
          {
            label: "Published Year",
            name: "publishedYear",
            type: "number",
            value: book.publishedYear,
          },
          {
            label: "Publisher",
            name: "publisher",
            type: "text",
            value: book.publisher,
          },
          {
            label: "Price",
            name: "price",
            type: "number",
            value: book.price,
          },
          {
            label: "Stock",
            name: "stock",
            type: "number",
            value: book.stock,
          },
        ].map(({ label, name, type, value }) => (
          <div className="mb-4" key={name}>
            <label className="block text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {selectedBook ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default BookForm;
