import React, { Component } from "react";
import FromInput from "../form-input/form-input.component";
import CustomButton from "../coustom-button/custom-cutton.component";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    handelSubmit = async envent => {
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword){
            alert("password don't match");
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            })
            createUserProfileDocument(user, {displayName})
        }catch(error){
            console.error(error)
        }

    }

    handelChange = e => {
        const {name, value} = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do nat have a account</h2>
                <span>Sign Up with your email and password</span>

                <FromInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handelChange}
                    label="Display Name"
                    required
                />
                <FromInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handelChange}
                    label="Email"
                    required
                />
                <FromInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handelChange}
                    label="Password"
                    required
                />
                <FromInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handelChange}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit">Sign Up</CustomButton>
            </div>
        );
    }
}

export default SignUp;
