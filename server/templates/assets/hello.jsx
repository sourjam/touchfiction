var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM

// export default class Hello extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div>hi again</div>
//   }
// }

var HelloMessage = React.createClass({
  handleClick: function () {
    alert('You clicked!')
  },

  render: function() {
    return <div onClick={this.handleClick}>Hello {this.props.name}</div>
  }
})

if (isNode) {
  exports.HelloMessage = HelloMessage
} else {
  ReactDOM.render(<HelloMessage name="John" />, document.getElementById('root'))
}