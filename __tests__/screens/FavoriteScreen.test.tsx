import * as reactRedux from "react-redux";
import { render } from "@testing-library/react-native";
import FavoriteScreen from "../../src/screens/FavoriteScreen";
import { NavigationContainer } from "@react-navigation/native";

const mockFavorites = [
  {
    title: "El Señor de los Anillos",
    pages: 1200,
    genre: "Fantasía",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    synopsis:
      "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
    year: 1954,
    ISBN: "978-0618640157",
    author: {
      name: "J.R.R. Tolkien",
      otherBooks: ["El Hobbit", "El Silmarillion"],
    },
  },
];

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const useSelectorSpy = jest.spyOn(reactRedux, "useSelector");

describe("FavoriteScreen", () => {
  beforeEach(() => {
    useSelectorSpy.mockReturnValue({ favorites: mockFavorites });
  });

  it("shows the correct message when there are no books", () => {
    useSelectorSpy.mockReturnValue({ favorites: [] });

    const { getByText } = render(<FavoriteScreen />);

    const expectedText = "No tienes libros para leer";
    expect(getByText(expectedText)).toBeTruthy();
  });

  it("shows the correct message when there are books", () => {
    const { getByText } = render(
      <NavigationContainer>
        <FavoriteScreen />
      </NavigationContainer>
    );

    const expectedText = `Tu lista de libros (${mockFavorites.length})`;
    expect(getByText(expectedText)).toBeTruthy();
  });
});
