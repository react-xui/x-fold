/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-04-03 14:17:16
 * @LastEditTime: 2020-04-28 17:01:59
 * @github: https://github.com/tianxiangbing
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from '../src/index';
import '../src/_index';
const Panel = Tabs.Panel;
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hide:false };
  }
  onClick=()=>{
    this.setState({hide:true})
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>hide</button>
      <Tabs defaultActive={["1","2","3"]} onChange={this.onChange}>
        <Panel tab="选项卡一" key="1">这是选项卡一的内容</Panel>
        <Panel tab="选项卡二" key="2">这是选项卡2的内容</Panel>
       {this.state.hide ?undefined: <Panel tab="选项卡二3" key="3">这是选项卡3的内容</Panel>}
      </Tabs>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);