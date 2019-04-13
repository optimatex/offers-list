
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

sinon.config = {
  useFakeTimers: false,
};

global.ROOT_URL = 'http://localhost:88888';
