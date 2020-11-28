import React, { Component } from 'react';

export default class Panel extends Component{
    static displayName="Panel";
    constructor(props){
        super(props);
    }
    render(){
        let {children,className} = this.props;
        return (
            <div className={className}>{children}</div>
        )
    }
}