import React from "react";
import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./components/firebase/firebase.utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount(){
      auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user })

        console.log(user)
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
