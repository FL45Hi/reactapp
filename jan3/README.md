**React Context**

Provides a way to pass data through the component tree.
Without having to pass props down manually every level.
data considered 'global' for tree of React Components.
Ex., Theme, User information, Browser history.

**Higher Order Components**

A higher-order component is a function that takes a component and returns a new component. 
A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. Higher-Order Components are not part of the React API. They are the pattern that emerges from React’s compositional nature. The component transforms props into UI, and a higher-order component converts a component into another component. 
The examples of HOCs are Redux’s connect and Relay’s createContainer.


**CSS in JS**
style api
@emotion/styled
@emotion/react

import styled from '@emotion/styled';

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
`;
