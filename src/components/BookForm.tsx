
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Book, BookFormData } from "@/types/book";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useLibrary } from "@/context/LibraryContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BookFormProps {
  bookId?: string;
  mode: 'add' | 'edit';
}

const initialBookData: BookFormData = {
  title: "",
  author: "",
  isbn: "",
  publishedYear: new Date().getFullYear(),
  genre: "",
  description: "",
  available: true,
  coverImage: "",
};

const BookForm = ({ bookId, mode }: BookFormProps) => {
  const { addBook, updateBook, getBook } = useLibrary();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookFormData>(initialBookData);

  // Load book data if editing
  useEffect(() => {
    if (mode === 'edit' && bookId) {
      const book = getBook(bookId);
      if (book) {
        setFormData(book);
      } else {
        navigate('/not-found');
      }
    }
  }, [bookId, getBook, mode, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, available: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'add') {
      addBook(formData);
      navigate('/');
    } else if (mode === 'edit' && bookId) {
      updateBook(bookId, formData);
      navigate(`/books/${bookId}`);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{mode === 'add' ? 'Add New Book' : 'Edit Book'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="isbn">ISBN</Label>
              <Input
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="publishedYear">Published Year</Label>
              <Input
                id="publishedYear"
                name="publishedYear"
                type="number"
                value={formData.publishedYear}
                onChange={handleNumberChange}
                required
                min="1000"
                max={new Date().getFullYear()}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="genre">Genre</Label>
              <Input
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover Image URL</Label>
              <Input
                id="coverImage"
                name="coverImage"
                value={formData.coverImage || ""}
                onChange={handleChange}
                placeholder="https://example.com/book-cover.jpg"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="available"
              checked={formData.available}
              onCheckedChange={handleSwitchChange}
            />
            <Label htmlFor="available">Available for borrowing</Label>
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit">
              {mode === 'add' ? 'Add Book' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookForm;
