import React, { Component } from 'react';

export const AppContext = React.createContext()

class AppProvider extends Component {
    state = {
        user: { name: 'test' },
    }
    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}

export default AppProvider