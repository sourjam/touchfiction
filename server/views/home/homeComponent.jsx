var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM
console.log('typeof', typeof module)

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log('home click');
  }

  render() {
    return <div onClick={this.handleClick}> Home </div>
  }
}

if (isNode) {
  module.exports = Home;
} else {
  ReactDOM.render(<Home/>, document.getElementById('root'))
}