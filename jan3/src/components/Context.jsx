import React from "react";

const MyThemeContext = React.createContext("light");
// Use React.createContext to create new Context Object.

function MyComponent() {
    const theme = "light";

    return (
        <MyThemeContext.Provider value={theme}>
            <div>
                my component.
            </div>
        </MyThemeContext.Provider>
    )
}

/*
Context provider : It is needed to make context availble to all React Components.
This provider lets consuming components to subscribe to context changes.
*/

class Context extends React.Component {
    static contextType = MyThemeContext;

    render() {
        return <button theme={this.context}>Button</button>
    }
}

export default Context;


// Multiple Context.

// Theme context, default to light theme
const ThemeContext = React.createContext('light');
// Signed-in user context 
const UsersContext = React.createContext({
    name: 'Guest',
});

/*
class multiContext extends Component {
    render() {

        const { signedInUser, theme } = this.props;

        // provides initial context values.
        return (
            <ThemeContext.Provider value={theme}>
                <UsersContext.Provider value={signedInUser}>
                    <Layout />
                </UsersContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

function Layout() {
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    )
}

function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UsersContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </UsersContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

function Sidebar() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UsersContext.Consumer>
                    {user => (
                        <ProfileSidebar user={user} theme={theme} />
                    )}
                </UsersContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}
*/