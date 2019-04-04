import React, { Component } from 'react';

export default class Panel extends Component{
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