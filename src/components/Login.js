import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { AUTH_TOKEN } from '../constants'
import logo from '../images/juice-logo-white.svg'; 

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $username: String!, $first: String!, $last: String!, $password: String!) {
    signup(email: $email, username: $username, first: $first, last: $last, password: $password) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    first: '',
    last: '',
    username: '',
    email: '',
    password: ''
  }

  render() {
    const { login, first, last, username, email, password} = this.state
    return (
      <div className="bg-pink br3 mt5">
        <div class="mw9 center ph3-ns">
          <div class="cf ph2-ns">
            <div class="fl w-100 w-25-ns pt1 dn-m">
              <div class="outline bg-white pv4">red line w lock</div>
            </div>
            <div class="fl w-100 w-50-ns w-100-m pt1">
              <div class="outline bg-white pv4"></div>
            </div>
            <div class="fl w-100 w-25-ns pt1 dn-m">
              <div class="outline bg-white pv4">blue line w earth</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt5">
          <img src={logo} alt="juicelogo"></img>
        </div>
        {/* <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4> */}
        <div className="flex flex-column">
            {!login && (
                <input
                value={first}
                onChange={e => this.setState({ first: e.target.value })}
                type="text"
                placeholder="First name"
                />
            )}
            {!login && (
                <input
                value={last}
                onChange={e => this.setState({ last: e.target.value })}
                type="text"
                placeholder="Last name"
                />
            )}
            {!login && (
                <input
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                    type="text"
                    placeholder="Your email"
                />
            )}
            <input
                value={username}
                onChange={e => this.setState({ username: e.target.value })}
                type="text"
                placeholder="Your username"
            />
            <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Choose a safe password"
            />
        </div>
        <div className="flex mt3">
            <Mutation
                mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                variables={{ first, last, email, username, password}}
                onCompleted={data => this._confirm(data)}
            >
                {mutation => (
                    <div className="pointer mr2 button" onClick={mutation}>
                        {login ? 'login' : 'create account'}
                    </div>
                )}
            </Mutation>
            <div className="pointer button" onClick={() => this.setState({ login: !login })}>
                {login ? 'need to create an account?' : 'already have an account?' }
            </div>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push(`/home`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login