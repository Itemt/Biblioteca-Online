
import BookFilters from "@/components/BookFilters";
import BookGrid from "@/components/BookGrid";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Colección de Biblioteca</h1>
        <p className="text-muted-foreground">
          Navega por nuestra colección de libros o usa los filtros para encontrar lo que estás buscando.
        </p>
      </div>
      
      <BookFilters />
      <BookGrid />
    </div>
  );
};

export default Index;
