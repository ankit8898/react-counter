var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const wellStyles = {
  maxWidth: 400,
  margin: '0 auto 10px'
};

var CounterComponent = React.createClass({
  getInitialState: function() {
    return {count: 0}
  },
  increment: function(value) {
    this.setState({
      count: this.state.count + value
    })
  },
  reset: function() {
    this.setState({count: 0})
  },
  getDefaultProps: function() {
    return {valueOne: 1, valueTwo: 5, valueThree: 10}
  },

  render: function() {
    return (
      <div>
        <h1>
          Simple Counter</h1>
        <Button bsStyle="primary" bsSize="large" block>
          {this.state.count} Items
        </Button>
        <CounterButton style="primary" onClickHandler={this.increment.bind(this, this.props.valueOne)} value={this.props.valueOne}/>
        <CounterButton style="success" onClickHandler={this.increment.bind(this, this.props.valueTwo)} value={this.props.valueTwo}/>
        <CounterButton style="warning" onClickHandler={this.increment.bind(this, this.props.valueThree)} value={this.props.valueThree}/>
        <ResetButton style="info" onClickHandler={this.reset}/>
      </div>
    )
  }
})

var ResetButton = function(props) {
  return (
    <Button bsStyle={props.style} onClick={props.onClickHandler}>
      Reset
    </Button>
  )
}

var CounterButton = function(props) {
  return (
    <Button bsStyle={props.style} onClick={props.onClickHandler}>Add {props.value}</Button>
  )
}

const counter = <CounterComponent valueOne={1} valueTwo={20} valueThree={50}/>;

ReactDOM.render(counter, document.getElementById('counter'))
