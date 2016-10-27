var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM
console.log('typeof', typeof module)


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
    return <a href='/read/1'> Go to Read </a>
  }
}

if (isNode) {
  module.exports = Home;
} else {
  ReactDOM.render(<Home/>, document.getElementById('root'))
}