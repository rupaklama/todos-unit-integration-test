import React from 'react';


// Enzyme configurations
import Adapter from 'enzyme-adapter-react-16';

// Shallow render method only renders just the give component with its 
// inner contents like div, text, input etc 
// but none of its react Children Component will render
import { shallow, configure } from 'enzyme';

// todo component
import Todo from './Todo';

// new instance of adapter
configure({adapter: new Adapter()});

// BDD - Behavior Driven Development syntax here
// describe func/statement is to group together similar sets of tests to prevent DRY code
// first arg describes both the tests below, second arg func wraps text contexts/cases
describe('<Todo /> component Unit Tests', () => {
  // setting up funcs for Simulating/Faking/Mock Events
  const mockFn = jest.fn(); // jest mock func for event handler like onClick
  // Since our Todo component have default props
  // Creating default props which will be pass to our component to test
  const props = {
    onClick: mockFn,
    completed: false,
    text: 'buy milk' // passing string value to test 
  }
  test('should render 1 <Todo /> component with props', () => {
    // shallow wrapper of our component to render with extra functionalities
    const component = shallow(<Todo {...props} />) // with above props
    // expect(component.length).toBe(1);
    expect(component).toHaveLength(1); // same as above
    // Jest - Use .toHaveLength to check that an object has a .length property 
    // and it is set to a certain numeric value

    // assertion to check if component renders li element with FIND selector
    // Find helper method can be use for finding 'Component instances' & also
    // to find normal 'HTML elements' as well
    expect(component.find('li')).toHaveLength(1);
  })
})
