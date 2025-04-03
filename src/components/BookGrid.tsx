
import BookCard from "./BookCard";
import { useLibrary } from "@/context/LibraryContext";

const BookGrid = () => {
  const { filteredBooks } = useLibrary();

  if (filteredBooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h3 className="text-xl font-semibold mb-2">No books found</h3>
        <p className="text-muted-foreground">
          No books match your current filters. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
