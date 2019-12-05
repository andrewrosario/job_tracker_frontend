import React, { Component } from 'react';
import Dashboard from '../dashboard/dashboard'

class WelcomeContainer extends Component {
    state = { 
        companies: []
     }

    render() { 
        return ( 
            <>
                <h1>Welcome!!</h1>
                <Dashboard />
            </>
         );
    }
}
 
export default WelcomeContainer;