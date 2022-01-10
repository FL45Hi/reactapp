import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy Loading 
const Home = lazy(() => import("./Home"));
const App = lazy(() => import("../App"));
const About = lazy(() => import("./About"));
const Gallery = lazy(() => import("./Gallery"));


// Name your chunk using the magic comment /* webpackChunkName: xxx */ and 
// optimize bundle sizes so that they are neither too small nor too large.

const NoPage = () => {
    return <h1>404 Not Found</h1>;
};


export default function Root() {
    return (
        <Router >
            <Suspense fallback={<h1>Loading.....</h1>}>
                <Routes>
                    <Route path='/' exact element={<App />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </Suspense>
        </Router>
    )
}


/*
Note: 
the loading spinner only shows for a short amount of time. 
Larger components can take much longer to load, especially on weak network connections.
To better demonstrate => 
1. inspect devtools -> network tab
2. Click the Throttling dropdown, which is set to No throttling by default. Select Fast 3G.
3. Now, it will adjust to our network and show loading spinner
*/
