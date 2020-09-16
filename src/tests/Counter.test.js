import React from 'react';
import Counter from '../components/counterApp/Counter';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter()})

test('renders without crashing', () => {
    const wrapper = shallow(<Counter/>)
    //console.log(wrapper.debug())
    const appComponent = wrapper.find("[data-test='component-app']")
    expect(appComponent.length).toBe(1)
});

  
test("renders button", () =>{

})

test("renders count display", () =>{
  
})

test("counter starts at 0", () =>{
  
})

test("clicking on button increments the counter", () =>{
  
})