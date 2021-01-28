import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import InitSesion from '../../../components/login/InitSesion'
describe('Prueba en el componente iniciar sesion', () => {
    const onSubmit = jest.fn();
    test('Debe de tomar un snapshot del  componente iniciar sesion', () => {
        const wrapper = shallow(<InitSesion/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de enviar nada', () => {
       const wrapper = shallow(<InitSesion />);
      wrapper.find('form').simulate('submit', {preventDefault:()=>{}})
      expect(onSubmit).not.toHaveBeenCalled()
    })
    
})