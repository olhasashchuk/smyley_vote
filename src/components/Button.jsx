import { Component } from 'react';
export class Button extends Component {
    render() {
        const {children, className, onClick} = this.props
        return <button
            className={`btn ${className}`}
            onClick={onClick}
        > {children}
        </button>
    }
}