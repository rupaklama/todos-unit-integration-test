import React from 'react';


// Enzyme configurations
import Adapter from 'enzyme-adapter-react-16';

// Shallow render method only renders just the give component with its 
// inner contents like div, text, input etc 
// but none of its react Children Component will render
import { shallow, configure } from 'enzyme';

// NOTE -  If componentDidMount or componentDidUpdate should be tested, use mount. 
// If you want to test component lifecycle and children behavior, use mount.
// mount(<Component />) for Full DOM rendering is ideal for use cases where you have components that may interact with DOM apis, 
// or may require the full lifecycle in order to fully test the component (ie, componentDidMount etc.)

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
       
    // note - node (ReactElement): array of nodes in the DOM
    // One Single Node in an array of nodes
    // expect(component.length).toBe(1); 
    expect(component).toHaveLength(1); // same as above
    // Jest - Use .toHaveLength to check that an object has a .length property 
    // and it is set to a certain numeric value

    // Find method - Finds every node in the render tree of the current wrapper that matches the provided selector
    // assertion to check if component renders li element with FIND selector
    // Find helper method can be use for finding 'Component instances' & also
    // to find normal 'HTML elements' as well
    expect(component.find('li')).toHaveLength(1);
  })
})
