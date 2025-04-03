
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre: string;
  description: string;
  available: boolean;
  coverImage?: string;
  addedDate: string;
}

export type BookFormData = Omit<Book, 'id' | 'addedDate'>;

export interface BookFilters {
  search: string;
  genre: string;
  availability: 'all' | 'available' | 'borrowed';
}
