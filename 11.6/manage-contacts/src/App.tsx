import * as React from 'react';
import './App.css';
import { appStore } from "./appStore";
import { appService } from "./appService";
import Contacts from './containers/Contacts';
import Loading from './components/Loading';
import Login from './components/Login';

class App extends React.Component {
    constructor(props) {
        super(props);

        appService.setRootComponent(this);
    }

    signUpHandler = (name, password) => {
        appService.signUp(name, password)
    }
    signInHandler = (name, password) => {
        appService.signIn(name, password)
    }

    public render() {
        console.log("render");

        const { loading } = appStore;
        let { updatingContactName } = appStore;
        const errorMessage = (appStore.error && appStore.error.message) || "";

        const editZone = updatingContactName && (
            <div className="edit-zone">
                <input value={updatingContactName} onChange={(event) => appService.updatingContactNameChanged(event.target.value)} />
                <button onClick={() => appService.save()}>Save</button>
            </div>
        )

        return (
            <div className="App">
                <h1>Manage Contacts</h1>

                <h2 className="error">{errorMessage}</h2>

                <Loading isLoading={loading} />
                <Contacts />
                <Login onSignUp={this.signUpHandler} onSignIn={this.signInHandler} />

                {editZone}
            </div>
        );
    }


}

export default App;
