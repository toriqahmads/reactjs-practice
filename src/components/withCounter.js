import React from 'react'

const withCounter = (WrappedComponent, increment) => {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + increment }
            })
        }

        render() {
            // {...this.props} is for pass any props remaining
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
        }
    }

    return WithCounter
}

export default withCounter