var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');


var TaskList = React.createClass({
  render: function(){
    return (
      <ul> </ul>
    )
  }
})



ReactDOM.render(<TaskList/>,document.getElementById('taskList'))

export default TaskList;
