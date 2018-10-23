
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
      React.createElement("form", {onSubmit: this.handleSubmit}, 
        React.createElement("label", null, 
          "String:", 
          React.createElement("input", {type: "text", value: value, onChange: this.handleChange('value')})
        ), 
        React.createElement("label", null, 
          "Param 1:", 
          React.createElement("input", {type: "text", value: param1, onChange: this.handleChange('param1')})
        ), 
        React.createElement("label", null, 
          "Param 2:", 
          React.createElement("input", {type: "text", value: param2, onChange: this.handleChange('param2')})
        ), 
        React.createElement("br", null), 
        React.createElement("h3", null, `'${value}'.slice(${param1},${param2})`), 
        React.createElement(StringTable, {str: value, sub: value.slice(param1,param2), params: [param1,param2]}), 
        React.createElement("h3", null, `'${value}'.substr(${param1},${param2})`), 
        React.createElement(StringTable, {str: value, sub: value.substr(param1,param2), params: [param1,param2]}), 
        React.createElement("h3", null, `'${value}'.substring(${param1},${param2})`), 
        React.createElement(StringTable, {str: value, sub: value.substring(param1,param2), params: [param1,param2]})
      )
    );
  }
}

const StringTable = ({str, sub, params}) => (React.createElement("table", null, 
    React.createElement("thead", null, 
        React.createElement("tr", null, 
          str.split('').map((c,i)=>(React.createElement("th", null,  i )))
        )
    ), 
    React.createElement("tbody", null, 
        React.createElement("tr", null, 
          str.split('').map((c,i)=>(React.createElement("th", {style: {color:i>=str.indexOf(sub)&&i<(str.indexOf(sub)+sub.length)?'black':'gray'}},  c )))
        )
    )
  ))

      
const my_app = React.createElement(App, null)