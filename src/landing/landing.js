import React, { Component } from 'react';
import LoginForm from '../login-form/login-form';


class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token : 'pending'
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(response) {

        this.setState({
           token: response.token
        });
    }

    render() {
        return (
            <div>
                <h1>Landing</h1>
                <LoginForm onLogin={this.handleLogin}/>
                <div>
                {this.state.token}
                </div>
            </div>
        );
    }
}

export default Landing;
