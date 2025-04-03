
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLibrary } from "@/context/LibraryContext";

const BookFilters = () => {
  const { books, filters, setFilters } = useLibrary();
  const [genres, setGenres] = useState<string[]>([]);

  // Extract unique genres from books
  useEffect(() => {
    const uniqueGenres = Array.from(new Set(books.map((book) => book.genre)));
    setGenres(uniqueGenres.sort());
  }, [books]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ search: e.target.value });
  };

  // Handle genre filter change
  const handleGenreChange = (value: string) => {
    setFilters({ genre: value });
  };

  // Handle availability filter change
  const handleAvailabilityChange = (value: string) => {
    setFilters({ availability: value as 'all' | 'available' | 'borrowed' });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-grow">
        <Input
          placeholder="Search by title, author or ISBN..."
          value={filters.search}
          onChange={handleSearchChange}
          className="w-full"
        />
      </div>
      <div className="flex gap-4">
        <Select
          value={filters.genre}
          onValueChange={handleGenreChange}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genres</SelectItem>
            {genres.map((genre) => (
              <SelectItem key={genre} value={genre}>
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.availability}
          onValueChange={handleAvailabilityChange}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Books</SelectItem>
            <SelectItem value="available">Available Only</SelectItem>
            <SelectItem value="borrowed">Borrowed Only</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BookFilters;
