import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

interface SignInProps {
  triggerRefresh: any;
}

class SignIn extends React.Component<SignInProps> {
  state = {
    email: "",
    password: ""
  };

  updateEmail = e => {
    this.setState({ email: e.target.value });
  };

  updatePassword = e => {
    this.setState({ password: e.target.value });
  };

  sendQuery = e => {
    console.log({ email: this.state.email, password: this.state.password });
  };

  signInMutation = gql`
    mutation($email: String!, $password: String!) {
      signinUser(email: { email: $email, password: $password }) {
        token
      }
    }
  `;

  handleToken = data => {
    console.log("TOKEN::::", data.signinUser.token);
    window.localStorage.setItem("token", data.signinUser.token);
  };

  render() {
    return (
      <div>
        <h1>Sign in pls</h1>
        <input placeholder="email" onChange={this.updateEmail} />
        <input placeholder="password" onChange={this.updatePassword} />

        <Mutation
          mutation={this.signInMutation}
          variables={{ email: this.state.email, password: this.state.password }}
          onCompleted={(data: any | Error) => {
            this.handleToken(data);
            this.props.triggerRefresh();
          }}
        >
          {(postMutation: () => void) => (
            <button onClick={postMutation}>Submit</button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default SignIn;
