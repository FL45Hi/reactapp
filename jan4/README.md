##### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Error Boundaries

Error boundaries are React components. Their role is to catch Javascript errors anywhere in their child component tree, log them and display an alternative UI instead of the component tree that crashed.

Error boundaries catch errors during:
- Rendering
- Lifecycle methods
- Constructors

But it's important to know that error boundaries do not catch errors for:

- Event handlers
- Async code
- Server side rendering (SSR)
- Errors thrown in the error boundary itself

**USEs** a Javascript error in some part of the UI shouldn’t break the whole app

#### Portals

Portals provide way to render childern into DOM node that exist outside DOM hierarchy of parent component.
Portals used when a parent component has *overflown:hidden or z-index style*, but need the child to visualy **break out** of its countainer.
e.g. Dialogs, hovercards, tooltips, Modal



#### Profilers

The *Profiler* measures how often a React application renders and what 'cost' of rendering is.
Its purpose is to help identify parts of app that are slow and may benefits from
**optimizations such as memoizations**.

E.g, Navigation component and its descendents.
<App>
    <Profiler id="Nav" onRender={callback}>
        <Nav {...props}/>
    </Profiler>
    <Main {...props}>
</App>

