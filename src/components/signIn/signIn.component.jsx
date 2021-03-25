import React, {Component} from 'react';
import './signIn.styles.scss';
import FormInput from './../../components/formInput/formInput.component';
import Button from '../../components/Button/Button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email : '', password : ''})
    }

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({[name] : value})

    }
    render() {
        return(
            <div className = 'sign-in'>
                <h2 className = 'title'>I already have an account</h2>
                <span>Sign In with your username and password</span>
                <form onSubmit = {this.handleSubmit}>

                    <FormInput type = 'email' name = 'email' value = {this.state.email} handleChange = {this.handleChange} label = 'Email'></FormInput>
                    
                    <FormInput type = 'password' name = 'password' value = {this.state.password} handleChange = {this.handleChange} label = 'Password'></FormInput>
                    
                    <Button type = 'submit'>Sign In</Button>
                    <Button onClick = {signInWithGoogle}>Sign In  With Google</Button>
                </form>
            </div>
        );
    }
}

export default SignIn;