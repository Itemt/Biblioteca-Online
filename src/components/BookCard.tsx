
import { Book } from "@/types/book";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLibrary } from "@/context/LibraryContext";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();
  const { toggleAvailability } = useLibrary();
  
  const handleCardClick = () => {
    navigate(`/books/${book.id}`);
  };
  
  const handleAvailabilityToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleAvailability(book.id);
  };

  return (
    <Card 
      className="book-card-hover overflow-hidden h-full flex flex-col"
      onClick={handleCardClick}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        {book.coverImage ? (
          <img 
            src={book.coverImage} 
            alt={`${book.title} cover`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">No cover image</span>
          </div>
        )}
        <Badge 
          className={`absolute top-2 right-2 cursor-pointer ${
            book.available ? 'bg-green-500 hover:bg-green-600' : 'bg-amber-500 hover:bg-amber-600'
          }`}
          onClick={handleAvailabilityToggle}
        >
          {book.available ? 'Available' : 'Borrowed'}
        </Badge>
      </div>
      <CardContent className="flex-grow flex flex-col justify-between p-4">
        <div>
          <h3 className="font-semibold text-lg line-clamp-2 mb-1">{book.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
          <Badge variant="outline" className="bg-secondary text-xs">
            {book.genre}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
