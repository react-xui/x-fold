import React, { Component } from 'react';

export default class Panel extends Component{
    static displayName="Panel";
    constructor(props){
        super(props);
    }
    render(){
        let {children} = this.props;
        return (
            <div>{children}</div>
        )
    }
}