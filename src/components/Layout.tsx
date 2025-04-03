
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LibraryBooks, PlusSquare } from "lucide-react";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <LibraryBooks className="h-6 w-6" />
            <span className="font-semibold text-xl">ShelfSide Stories</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link to="/books/add">
              <Button variant="ghost" className="flex items-center gap-1">
                <PlusSquare className="h-4 w-4" />
                <span>Add Book</span>
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
          <p>© 2025 ShelfSide Stories Library Management System</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
