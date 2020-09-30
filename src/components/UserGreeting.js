import React, { Component } from 'react'
import Message from './Message'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {


        return this.state.isLoggedIn && <div>Welcome Emiel</div>


        // return this.state.isLoggedIn ? (
        //     <div>Welcome Emiel</div>
        // ) : (
        //         <div>Welcome Guest</div>)


        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welkome Emiel</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Emiel</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Emiel</div>
        //         <div>Welcome Guest</div>
        //     </div>

        // )
    }

}

export default UserGreeting