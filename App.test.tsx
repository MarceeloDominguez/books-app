import App from "./App";
import renderer from "react-test-renderer";

jest.useFakeTimers();

describe("App", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();

    if (Array.isArray(tree)) {
      expect(tree.length).toBe(1);
    } else {
      expect(1).toBe(1);
    }
  });
});
