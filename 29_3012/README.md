### Getting Started with Create React App


#### React Ref

1. Refs is similar to keys in React or literlly references in React. 
2. useRef returns *mutable ref object*
3. Object's .current property is initialized to passed argument - default intial value.
4. Returned object will persist for lifetime of component.

const refObject = useRef(initialValues);

NOTE: use can use **createRef** if you are using class component.

useRef() :
It can be used to store a mutable value that *does not cause a re-render* when updated.
It can be used to access a DOM element directly.


#### React BootStrap

Add a link for loading the CSS stylesheet for Bootstrap inside of the head tag in the public/index.html file of the application:

<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
    
    
 #### Styled components
 
 The styled components library offers an approach for defining styles through tagged template literals of ES6.
 
