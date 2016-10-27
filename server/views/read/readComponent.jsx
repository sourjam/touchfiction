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
      // let url = window.location.pathname + '/data';
      // console.log('read comp mounted', url);
      // fetch(url).then((res)=>res.json()).then((data)=>{
      //   console.log(data)
      //   this.setState({data: data.data});
      // });
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
  console.log('what', window.localStorage)
  ReactDOM.render(<Read data={localStorage.getItem('data')}/>, document.getElementById('read'))
}