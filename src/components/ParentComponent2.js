import React, { Component, PureComponent } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';
import MemoComponent from './MemoComponent';

class ParentComponent2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Toriq'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Toriq'
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent Component 2')
        return (
            <div>
                Parent Component 2

                <MemoComponent name={this.state.name} />
                {/* <PureComp name={this.state.name} />
                <RegularComp name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComponent2;