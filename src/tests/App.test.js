import React from 'react';
import App from '../App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter()})

test('renders without crashing', () => {
  const wrapper = shallow(<App />)
  //console.log(wrapper.debug())
  expect(wrapper).toBeTruthy();
});

test("renders button", () =>{

})

test("renders count display", () =>{
  
})

test("counter starts at 0", () =>{
  
})

test("clicking on button increments the counter", () =>{
  
})
