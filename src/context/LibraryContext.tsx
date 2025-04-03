
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Book, BookFilters } from '@/types/book';
import { toast } from '@/components/ui/use-toast';
import { sampleBooks } from '@/data/sampleBooks';

interface LibraryContextType {
  books: Book[];
  filteredBooks: Book[];
  filters: BookFilters;
  addBook: (book: Omit<Book, 'id' | 'addedDate'>) => void;
  updateBook: (id: string, book: Partial<Book>) => void;
  deleteBook: (id: string) => void;
  setFilters: (filters: Partial<BookFilters>) => void;
  getBook: (id: string) => Book | undefined;
  toggleAvailability: (id: string) => void;
}

const defaultFilters: BookFilters = {
  search: '',
  genre: 'all',
  availability: 'all',
};

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filters, setFiltersState] = useState<BookFilters>(defaultFilters);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  // Initialize books from localStorage or use sample books
  useEffect(() => {
    const storedBooks = localStorage.getItem('library-books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    } else {
      setBooks(sampleBooks);
    }
  }, []);

  // Save books to localStorage whenever they change
  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem('library-books', JSON.stringify(books));
    }
  }, [books]);

  // Filter books whenever books or filters change
  useEffect(() => {
    let result = [...books];
    
    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        book => 
          book.title.toLowerCase().includes(searchLower) || 
          book.author.toLowerCase().includes(searchLower) ||
          book.isbn.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply genre filter
    if (filters.genre && filters.genre !== 'all') {
      result = result.filter(book => book.genre === filters.genre);
    }
    
    // Apply availability filter
    if (filters.availability !== 'all') {
      result = result.filter(book => 
        filters.availability === 'available' ? book.available : !book.available
      );
    }
    
    setFilteredBooks(result);
  }, [books, filters]);

  // Add a new book
  const addBook = (bookData: Omit<Book, 'id' | 'addedDate'>) => {
    const newBook: Book = {
      ...bookData,
      id: Date.now().toString(),
      addedDate: new Date().toISOString(),
    };
    
    setBooks(prev => [...prev, newBook]);
    toast({
      title: "Book Added",
      description: `"${bookData.title}" has been added to the library.`
    });
  };

  // Update an existing book
  const updateBook = (id: string, bookData: Partial<Book>) => {
    setBooks(prev => 
      prev.map(book => 
        book.id === id ? { ...book, ...bookData } : book
      )
    );
    toast({
      title: "Book Updated",
      description: `The book information has been updated.`
    });
  };

  // Delete a book
  const deleteBook = (id: string) => {
    const bookToDelete = books.find(book => book.id === id);
    setBooks(prev => prev.filter(book => book.id !== id));
    toast({
      title: "Book Removed",
      description: bookToDelete 
        ? `"${bookToDelete.title}" has been removed from the library.`
        : "Book has been removed from the library.",
      variant: "destructive"
    });
  };

  // Set filters
  const setFilters = (newFilters: Partial<BookFilters>) => {
    setFiltersState(prev => ({ ...prev, ...newFilters }));
  };

  // Get a specific book
  const getBook = (id: string) => {
    return books.find(book => book.id === id);
  };

  // Toggle book availability
  const toggleAvailability = (id: string) => {
    setBooks(prev => 
      prev.map(book => 
        book.id === id ? { ...book, available: !book.available } : book
      )
    );
    
    const book = books.find(b => b.id === id);
    if (book) {
      const newStatus = !book.available;
      toast({
        title: `Book ${newStatus ? 'Available' : 'Borrowed'}`,
        description: `"${book.title}" is now ${newStatus ? 'available for borrowing' : 'marked as borrowed'}.`
      });
    }
  };

  return (
    <LibraryContext.Provider value={{
      books,
      filteredBooks,
      filters,
      addBook,
      updateBook,
      deleteBook,
      setFilters,
      getBook,
      toggleAvailability,
    }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};
