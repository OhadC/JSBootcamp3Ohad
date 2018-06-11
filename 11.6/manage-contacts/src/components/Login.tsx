import * as React from 'react'

class Login extends React.Component<any, any> {
    state = {
        name: '',
        password: ''
    }

    inputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({ [name]: value })
    }

    onSignUp = () => {
        this.props.onSignUp(this.state.name, this.state.password)
    }
    onSignIn = () => {
        this.props.onSignIn(this.state.name, this.state.password)
    }

    render() {
        return (
            <div>
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={this.state.name} onChange={this.inputChangedHandler} />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={this.state.password} onChange={this.inputChangedHandler} />
                </p>
                <button onClick={this.onSignUp}>sign up</button>
                <button onClick={this.onSignIn}>sign in</button>
            </div>
        )
    }
}

export default Login
