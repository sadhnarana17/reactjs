 import React from 'react'
 import { render } from 'react-dom'

export class Password extends React.Component {  
    render() {
        return (
            <span>
                <label htmlFor="password">Create Password</label><br/>               
                <input
                id="password" 
                type={this.props.type} 
                placeholder="Enter password...."               
                onChange={this.props.onChange} 
                /> 
            </span>   
        )
    }
}