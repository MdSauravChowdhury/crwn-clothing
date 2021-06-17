import React, { Component } from "react";
import "./sign-in.styles.scss";
import CustomButton from '../coustom-button/custom-cutton.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: "", password: "" });
    };

    handelChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        required
                        handelChange={this.handelChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="Password"
                        required
                        handelChange={this.handelChange}
                    />

                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign in With Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
