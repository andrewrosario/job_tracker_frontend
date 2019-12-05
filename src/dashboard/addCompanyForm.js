import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class AddCompanyForm extends Component {
    state = { 
        company: {
            name: '',
            tech_stack: '',
            num_employees: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            company: {
                ...this.state.company,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: this.state.company
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}companies`, settings)
            const data = await response.json()
            return data
        } catch (event) {
            console.log(event)
            return event
        }
    }

    render() { 
        return ( 
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group controlId='companyName'>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control value={this.state.company.name} type='text' name='name' onChange={this.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId='techStack'>
                        <Form.Label>Technology Stack</Form.Label>
                        <Form.Control as='textarea' name='tech_stack' value={this.state.company.tech_stack} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId='numEmployees'>
                        <Form.Label>Number of Employees</Form.Label>
                        <Form.Control type='number' name='num_employees' value={this.state.company.num_employees} onChange={this.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
         );
    }
}
 
export default AddCompanyForm;