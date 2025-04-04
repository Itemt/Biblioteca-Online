
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Library, PlusSquare, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Layout = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Library className="h-6 w-6" />
            <span className="font-semibold text-xl">{t("libraryName")}</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link to="/books/add">
              <Button variant="ghost" className="flex items-center gap-1">
                <PlusSquare className="h-4 w-4" />
                <span>{t("addBook")}</span>
              </Button>
            </Link>
            <Link to="/admin/login">
              <Button variant="ghost" className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>{t("admin")}</span>
              </Button>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-grow container py-8">
        <Outlet />
      </main>
      <footer className="border-t py-6 bg-muted/40">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
