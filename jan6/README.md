#### Improve React app performance

- Measure performance using these tools
    - Chrome dev tools
        - Check out the performance timeline and 􀁼ame charts
    - Chrome's Lighthouse tool

- Minimize unnecessary component re-renders
    - use shouldComponentUpdate where applicable
    - use PureComponent
    - use Rect.memo for functional components
        - along with the useMemo() hook
    - use React.lazy if you are not doing server-side rendering
    - use service worker to cache files that are worth caching
    - use libraries like react-snap to pre-render components

- Example of *shouldComponentUpdate*
    - **NOTE:** It is encouraged to use function components over class components
    - With function components you can use useMemo() and Rect.memo hooks

- Lazy load the components
    - Webpack optimizes your bundles
    - Webpack creates separate bundles for lazy loaded components
    - Multiple small bundles are good for performance

- Cache things worth caching
    - use service worker
        - It runs in the background
    - Include specific functionality that requires heavy computation on a separate thread
        - To improve UX
        - This will unblock the main thread

- Server-side rendering

*Lists cause most of the performance problems*


**Code splitting using Webpack dynamic import syntax**
import(“module_name”).then({ default } => // do something)