import renderer from "react-test-renderer";
import Description from "../../src/components/Description";
import { Text } from "react-native";

describe("Component Desciption", () => {
  it("verify that the component has rendered correctly", () => {
    const synopsis = "Esta es una sinopsis de prueba.";

    const component = renderer.create(<Description synopsis={synopsis} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should render synopsis correctly", () => {
    const synopsis = "Esta es una sinopsis de prueba.";

    const component = renderer.create(<Description synopsis={synopsis} />);

    const tree = component.root;

    //busco el elemento Text dentro del componente
    const textElements = tree.findAllByType(Text);

    //verifico que al menos haya un elemento text
    expect(textElements.length).toBeGreaterThan(0);

    //itero sobre los elementos Text y verifico si contiene la prop synopsis
    let found = false;
    textElements.forEach((textElement) => {
      if (textElement.props.children === synopsis) {
        found = true;
      }
    });

    expect(found).toBe(true);
  });
});
