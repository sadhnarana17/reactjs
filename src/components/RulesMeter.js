 import React from 'react'
 import { render } from 'react-dom'


export class RulesMeter extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <div className="meter-wrapper">
                   <div className={this.props.className}></div>
                </div>   
            </div>
        )
    }
}