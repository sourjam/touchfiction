var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react-dom') : window.ReactDOM

var component;
var clientRendered = false;

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: null
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log('base comp mounted', window.location.href)
  }

  handleClick() {
    console.log('base click');
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


let markRender = () => {
  clientRendered = true;
  console.log('now rendered')
}

if (!clientRendered) {
  try{
    if (window) {
      ReactDOM.render(<Base/>, document.getElementById('app'), markRender)
    }
  }catch(e) {
    // console.log('error rendering on client', e)
  }
}

if (isNode) {
  module.exports = Base;
}