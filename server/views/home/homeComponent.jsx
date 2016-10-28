var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM
console.log('typeof', typeof module)
console.log('home comp', isNode)

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: null
    }
  }

  componentDidMount() {
    console.log('home comp mounted')
  }

  handleClick() {
    console.log('home click');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Hello</button>
        <a href='/read/1'> Go to Read </a>
      </div>
    )
  }
}

let window = window || false;
console.log('window', window)
if (isNode) {
  module.exports = Home;
} else {
  console.log('mounting?')
  ReactDOM.render(<Home/>, document.getElementById('root'))
}