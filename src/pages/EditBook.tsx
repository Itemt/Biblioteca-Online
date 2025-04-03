
import { useParams } from "react-router-dom";
import BookForm from "@/components/BookForm";

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  
  return <BookForm mode="edit" bookId={id} />;
};

export default EditBook;
