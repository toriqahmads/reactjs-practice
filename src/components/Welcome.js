import React, {Component} from 'react'

class Welcome extends Component {
    render(){
        // extracting props to constanta a.k.a destructing props
        const {name, heroName} = this.props
        //extracting props to constanta a.k.a destructing state
        //const {state1, state2} = this.state
        return(
            <h1>Welcome {name} a.k.a {heroName}</h1>
        )
    }
}

export default Welcome