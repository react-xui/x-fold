/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-fold
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';
export default class Fold extends Component {
  static Panel = Panel;
  constructor(props) {
    super(props);
    let active = props.defaultActive;
    this.state = { active: active };
  }
  componentWillReceiveProps(newprops){
    if( typeof newprops.active !=='undefined' && newprops.active != this.state.active){
      this.setState({active:newprops.active});
    }
  }
  formatTabs() {
    // console.log(React.Children)
    let headers = [];
    let contents = [];
    let { active } = this.state;
    let {forceRender} = this.props;
    React.Children.forEach(this.props.children, (item, k) => {
      let { children, tab } = item.props;
      let cls = 'x-fold-header-item', clsCon = 'x-fold-item';
      let { key } = item;
      let isShow = true;
      if (active.indexOf(key) > -1 ) {
        cls += " active";
        clsCon += " active";
      }
      headers.push(
        <div key={key} className={cls} >
          <div className="fold-title"  onClick={this.onSelect.bind(this, key)}>
            <i className="fold-title-icon"><svg viewBox="64 64 896 896" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" ><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i>
            {tab}
          </div>
          <div className={clsCon} >{React.cloneElement(item)}</div>
        </div>
      );
    })
    return <div>{headers}</div>;
  }
  onSelect = (key)=>{
    let {active} = this.state;
    let index = active.indexOf(key);
    if( index>-1 ){
      active.splice(index,1);
    }else{
      active.push(key);
    }
    this.setState({active},()=>{
      this.props.onChange&&this.props.onChange(key);
    });
  }
  render() {
    let {className} = this.props;
    let cls = typeof className ==='undefined'? "x-fold":className +' x-fold';
    return (
      <div className={cls}>
        {this.formatTabs()}
      </div>
    );
  }
}
