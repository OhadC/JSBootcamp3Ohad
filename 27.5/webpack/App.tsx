import * as React from 'react'
import Clock from './Clock'

class App extends React.Component {
    state = {
        time: null
    }

    render() {
        window.setTimeout(() => {
            this.setState({time: new Date()})
        }, 500)

        return (
            <Clock time={this.state.time} />
        )
    }
}

export default App
