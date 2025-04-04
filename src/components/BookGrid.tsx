
import BookCard from "./BookCard";
import { useLibrary } from "@/context/LibraryContext";
import { useLanguage } from "@/context/LanguageContext";

const BookGrid = () => {
  const { filteredBooks } = useLibrary();
  const { t } = useLanguage();

  if (filteredBooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h3 className="text-xl font-semibold mb-2">{t('noResults')}</h3>
        <p className="text-muted-foreground">
          No se encontraron libros que coincidan con tus filtros. Intenta ajustar tus criterios de búsqueda.
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
