import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from '../src/index';
import '../src/_index';
const Panel = Tabs.Panel;
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
      <Tabs defaultActive={["1"]} onChange={this.onChange}>
        <Panel tab="选项卡一" key="1">这是选项卡一的内容</Panel>
        <Panel tab="选项卡二" key="2">这是选项卡2的内容</Panel>
      </Tabs>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);