var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM
console.log('typeof', typeof module)

class Hello extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick() {
    console.log('you clicked')
  }

  render() {
    return <div onClick={this.handleClick}> Hello {this.props.name}</div>
  }
}

if (isNode) {
  // exports.HelloMessage = HelloMessage
  exports.HelloMessage = Hello
} else {
  ReactDOM.render(<Hello name="John" />, document.getElementById('root'))
}