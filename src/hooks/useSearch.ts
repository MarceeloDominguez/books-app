import { useEffect, useState } from "react";
import BOOKS from "../data/books.json";
import { Library } from "../interfaces/book";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState<Library[]>([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = BOOKS.library.filter((item) =>
        item.book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchData(filtered);
    } else {
      setSearchData([]);
    }
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, searchData };
};

export default useSearch;
