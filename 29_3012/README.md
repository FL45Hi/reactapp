### Getting Started with Create React App


#### React Ref

1. Refs is similar to keys in React or literlly references in React. 
2. useRef returns *mutable ref object*
3. Object's .current property is initialized to passed argument - default intial value.
4. Returned object will persist for lifetime of component.

const refObject = useRef(initialValues);

NOTE: use can use **createRef** if you are using class component.