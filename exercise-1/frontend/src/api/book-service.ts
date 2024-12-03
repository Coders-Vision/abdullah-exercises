import { Book } from '../types/book';
import { ResponseSuccess } from '../types/response';
import {axiosInstance} from './axiosInstance';

export const getBooks = async (): Promise<Book[]> => {
  const response = await axiosInstance.get<ResponseSuccess<Book[]>>('/books');
  return response.data.data || [];
};

export const addBook = async (book: Book): Promise<Book> => {
  const response = await axiosInstance.post<Book>('/books', book);
  return response.data;
};

export const updateBook = async (id: string, book: Book): Promise<Book> => {
  const response = await axiosInstance.patch<Book>(`/books/${id}`, book);
  return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/books/${id}`);
};
