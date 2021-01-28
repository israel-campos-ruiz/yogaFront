import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CreateAccount from "../../../components/login/CreateAccount";
describe("Pruebas en el componente <CreateAccount />", () => {
  const wrapper = shallow(<CreateAccount />);
  test("Debe de crear un snapshot del componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe enviar los valores", () => {
      const inputValues = {
        nombre: "Israel",
        email: "isracamp@gmail.com",
        edad: "25",
        password: "123456",
        telefono: "123456",
      }
    const wrapper = shallow(<CreateAccount {...inputValues} />);
    const inputName = wrapper.find('input=[name="nombre"]').at(0)
    inputName.simulate('change', {target:{values:inputValues.nombre}})
    console.log(inputName.text())

  });
});
