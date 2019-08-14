import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Toriq'
        }

        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA ComponentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Edo'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>
                    LifeCycleA
                </div>
                <button onClick={this.changeState}>changeState</button>
                <LifeCycleB />
            </div>
        );
    }
}


export default LifeCycleA;