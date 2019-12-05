import React, { Component } from 'react';
import AddCompanyForm from './addCompanyForm';

class Dashboard extends Component {
    state = { 
        companies: []
    }

    async componentDidMount() {
        let response = await fetch('http://job-tracker-backend.herokuapp.com/companies/')
        let companies = await response.json()
        this.setState({
            companies: companies
        })
    }

    render() { 
        return ( 
            <>
                <h2>List Companies</h2>
                {this.state.companies.map(company => (
                    <>
                        <h3>{company.name}</h3>
                        <p>{company.tech_stack}</p>
                    </>
                ))}
                <AddCompanyForm/>
            </>
         );
    }
}
 
export default Dashboard;