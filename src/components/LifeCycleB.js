import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Toriq'
        }

        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleB ComponentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        );
    }
}


export default LifeCycleB;