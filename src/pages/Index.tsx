
import BookFilters from "@/components/BookFilters";
import BookGrid from "@/components/BookGrid";

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Library Collection</h1>
        <p className="text-muted-foreground">
          Browse our collection of books or use the filters to find what you're looking for.
        </p>
      </div>
      
      <BookFilters />
      <BookGrid />
    </div>
  );
};

export default Index;
