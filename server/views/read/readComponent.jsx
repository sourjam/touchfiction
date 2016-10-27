var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM
console.log('read')


class Read extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  componentWillMount() {
    if (!isNode) {
      console.log(this.props)
    }

  }

  handleClick() {
    console.log('read click');
  }

  render() {
    return <div onClick={this.handleClick}> Read {this.state.data}</div>
  }
}

if (isNode) {
  module.exports = Read;
} else {
  let json = localStorage.getItem('json');
  let data = JSON.parse(json);
  let text = data[0].text;
  localStorage.json = null;
  ReactDOM.render(<Read data={text}/>, document.getElementById('read'))
}