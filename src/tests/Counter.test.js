import React from 'react';
import Counter from '../components/counterApp/Counter';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Counter/>)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)
test('renders without crashing', () => {
    const wrapper = setup()
    //console.log(wrapper.debug())
    const appComponent = findByTestAttr(wrapper,'component-app')
    expect(appComponent.length).toBe(1)
});

  
test("renders button", () =>{
    const wrapper = setup()
    const buttonComponent = findByTestAttr(wrapper,'component-button')
    expect(buttonComponent.length).toBe(1)
})

test("renders count display", () =>{
    const wrapper = setup()
    const displayComponent = findByTestAttr(wrapper,'component-display')
    expect(displayComponent.length).toBe(1)
})

test("counter starts at 0", () =>{
  
})

test("clicking on button increments the counter", () =>{
  
})