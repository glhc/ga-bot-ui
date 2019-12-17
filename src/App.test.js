import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
// import {shallow, mount} from 'enzyme';
import App from './App';
// import NavBar from './components/NavBar/NavBar.js';

// describe('<App />', () => {
//   test('renders a NavBar', () => {
//     const wrapper = shallow(<NavBar />);
//   });
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
