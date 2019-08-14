import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} ${childName}`)
    }

    render() {
        return (
            <div>
                {/* greetHandler={this.greetParent} is passing method greetParent to ChildComponent */}
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
