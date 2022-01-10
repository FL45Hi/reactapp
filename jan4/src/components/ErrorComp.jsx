import ErrorBoundary from './ErrorBoundary'
import React from 'react';
import News from "./News";
import Chat from "./Chat";
import BugCounter from './BugCounter';



export default function ErrorComp() {
    return (
        // <ErrorBoundary>

        //     <div style={{ padding: "0.5rem 1.5rem" }}>
        //         <h1>Welcome!</h1>
        //         <hr />
        //         <News />
        //         <hr />
        //         <Chat />
        //     </div>

        // </ErrorBoundary>

        /*
            We can use multiple error boundaries for different sections.
            we will able to catch our error and display a fallback UI.
            even though the error was thrown by only one of the components.
        */

        <div style={{ padding: "0.5rem 1.5rem" }}>
            <h1>Welcome!</h1>
            <hr />
            <ErrorBoundary>
                <News />
            </ErrorBoundary>
            <hr />
            <ErrorBoundary>
                <Chat />
            </ErrorBoundary>

            <BugCounter />
        </div>
    )
}
