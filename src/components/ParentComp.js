import React, { Component, PureComponent } from 'react'
import MemoComponent from './MemoComponent'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Emiel'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Emiel'
            })
        }, 2000)
    }
    render() {
        console.log('*********** Parent Component render ***************')
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name} />
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
