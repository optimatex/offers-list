
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// make testing same as it will be in client, not server side rendering
global.CLIENT = true;

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

jest.DEFAULT_TIMEOUT_INTERVAL = 1;

// Break the test for any error
console.error = message => {
  throw new Error(message);
};


global.ROOT_URL = 'http://localhost:88888';
