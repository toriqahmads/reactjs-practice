import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this is for binding event handler in constructo for style 3 (binding in constructor)
        this.clickHandler = this.clickHandler.bind(this)
    }

    // this writing function style is for binding event handler style 1 and style 2 (binding in render function) and (binding in render function in arrow function)
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    //this writing function style (es6) is for binding event handler style 4 (binding in property class as arrow function)
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Good bye'
    //     })
    // }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <div>
                    {/* .bind(this) is a binding event handler style 1 (binding in render function)*/}
                    {/* onClick={this.clickHandler.bind(this)} */}
                    {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}

                    {/* this is binding event handler style 2 (binding in render function in arrow function)*/}
                    {/* onClick={() => this.clickHandler()} */}
                    {/* <button onClick={() => this.clickHandler()}>Click me 2</button> */}

                    {/* this is binding event handler styile 3 (binding in constructor)*/}
                    <button onClick={this.clickHandler}>Click me 2</button>

                    {/* this is binding event handler styile 4 (binding in property class as arrow function)*/}
                    {/* <button onClick={this.clickHandler}>Click me</button> */}
                </div>
            </div>
        )
    }
}

export default EventBind
