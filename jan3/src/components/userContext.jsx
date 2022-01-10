import React from "react";

const UserContext = React.createContext()

// const UserContext = React.createContext('FL45H')
// we can add default context values also.

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext;