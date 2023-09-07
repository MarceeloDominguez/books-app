import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
} from "../features/favorites/favoritesSlice";
import { RootState } from "../store/store";
import { Book } from "../interfaces/book";

const useToggleFavorite = (book: Book) => {
  const { favorites } = useSelector((state: RootState) => state.favorites);

  const dispatch = useDispatch();

  const isFavorite = favorites.includes(book);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(book.ISBN));
      return;
    }

    dispatch(addFavorite(book));
  };

  return { toggleFavorite, isFavorite };
};

export default useToggleFavorite;
