class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'hello world',
      param1: '2',
      param2: '-1',
      
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(param) {
    return (event)=>this.setState({[param]: param=='value'||event.target.value.length>0?event.target.value:undefined});
  }

  render() {
    //const {value, param1, param2} = this.state
    const value = this.state.value
    const param1 = this.state.param1
    const param2 = this.state.param2
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          String:
          <input type="text" value={value} onChange={this.handleChange('value')} />
        </label>
        <label>
          Param 1:
          <input type="text" value={param1} onChange={this.handleChange('param1')} />
        </label>
        <label>
          Param 2:
          <input type="text" value={param2} onChange={this.handleChange('param2')} />
        </label>
        <br/>
        <h3>{`'${value}'.slice(${param1},${param2})`}</h3>
        <StringTable str={value} sub={value.slice(param1,param2)} params={[param1,param2]} />
        <h3>{`'${value}'.substr(${param1},${param2})`}</h3>
        <StringTable str={value} sub={value.substr(param1,param2)} params={[param1,param2]} />
        <h3>{`'${value}'.substring(${param1},${param2})`}</h3>
        <StringTable str={value} sub={value.substring(param1,param2)} params={[param1,param2]} />
      </form>
    );
  }
}

const StringTable = ({str, sub, params}) => (<table>
    <thead>
        <tr>
          {str.split('').map((c,i)=>(<th>{ i }</th>))}
        </tr>
    </thead>
    <tbody>
        <tr>
          {str.split('').map((c,i)=>(<th style={{color:i>=str.indexOf(sub)&&i<(str.indexOf(sub)+sub.length)?'black':'gray'}}>{ c }</th>))}
        </tr>
    </tbody>
  </table>)

      
const my_app = <App/>