
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Book } from "@/types/book";
import { useLibrary } from "@/context/LibraryContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Edit, Trash2, BookOpen } from "lucide-react";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getBook, deleteBook, toggleAvailability } = useLibrary();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) {
      const foundBook = getBook(id);
      if (foundBook) {
        setBook(foundBook);
      } else {
        navigate('/not-found');
      }
    }
  }, [id, getBook, navigate]);

  if (!book) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Loading...</p>
      </div>
    );
  }

  const handleDelete = () => {
    deleteBook(book.id);
    navigate('/');
  };

  const handleToggleAvailability = () => {
    toggleAvailability(book.id);
    const updatedBook = getBook(book.id);
    if (updatedBook) {
      setBook(updatedBook);
    }
  };

  const formattedDate = new Date(book.addedDate).toLocaleDateString();
  
  return (
    <div className="max-w-5xl mx-auto">
      <Button 
        variant="ghost" 
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        ← Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="rounded-md overflow-hidden border bg-card">
            {book.coverImage ? (
              <img 
                src={book.coverImage} 
                alt={`${book.title} cover`} 
                className="w-full aspect-[2/3] object-cover"
              />
            ) : (
              <div className="w-full aspect-[2/3] bg-muted flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-muted-foreground" />
              </div>
            )}
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <div className="flex gap-2">
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => navigate(`/books/edit/${book.id}`)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="icon" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Book</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete "{book.title}"? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl">by {book.author}</h2>
            <Badge className="bg-primary">{book.genre}</Badge>
            <Badge 
              className={`cursor-pointer ${book.available ? 'bg-green-500 hover:bg-green-600' : 'bg-amber-500 hover:bg-amber-600'}`}
              onClick={handleToggleAvailability}
            >
              {book.available ? 'Available' : 'Borrowed'}
            </Badge>
          </div>
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">{book.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">ISBN</h3>
                  <p>{book.isbn}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Published Year</h3>
                  <p>{book.publishedYear}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Added to Library</h3>
                  <p>{formattedDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
