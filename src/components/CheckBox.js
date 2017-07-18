 import React from 'react'
 import { render } from 'react-dom'


export class CheckBox extends React.Component { 
    render() {
        return (
            <label htmlFor="show-password">
                &nbsp;            
                &nbsp;
                <input 
                    id="show-password"
                    name="show-password" 
                    type="checkbox" 
                    checked={this.props.showPassword} 
                    onChange={this.props.onClick}
                    />
                  &nbsp;Show Password
            </label>
        )
    }
}
