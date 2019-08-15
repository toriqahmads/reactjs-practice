import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
        
        //ref in react
        this.inputRef = React.createRef()

        //set callback initiate for ref
        this.cbRef = null

        //set callback value this.cbRef with element passed from dom
        this.setCbRef = (element) => {
            this.cbRef = element
        }

        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        console.log(this.cbRef)
        //check if callback value is null?
        if(this.cbRef){
            //focuing input
            this.cbRef.focus()
        }
        console.log(this.inputRef)
    }

    clickHandler = () => {
        this.setState({
            name: this.inputRef.current.value
        })
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default RefDemo
