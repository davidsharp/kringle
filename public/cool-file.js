
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'hello world',
      param1: '2',
      param2: '-1',
      hasGroups: true,
      participants: ['test']
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(param) {
    return (event)=>this.setState({[param]: param=='value'||event.target.value.length>0?event.target.value:undefined});
  }
  
  handleParticpantChange(index) {
    return (param)=>(event)=>{
      let p = this.state.participants
      p[index]={...p[index],[param]: event.target.value.length>0?event.target.value:undefined}
      this.setState({participants:p})
      console.log(p)
    }
  }

  render() {
    //const {value, param1, param2} = this.state
    const value = this.state.value
    const param1 = this.state.param1
    const param2 = this.state.param2
    return (
      React.createElement("div", null, 
        this.state.participants.map((c,i)=>(React.createElement(Participant, {key: i, index: i, data: c, hasGroups: this.state.hasGroups}))), 
        React.createElement("button", {onClick: _=>this.setState({participants:[].concat(this.state.participants,[''])})})
      )
    );
  }
}
//onChange={handleChange(index)('value')}
const Participant = ({index,/*handleChange,*/ data, hasGroups}) => (React.createElement("form", {className: "participant"}, 
        React.createElement("label", null, 
          "Name:", 
          React.createElement("input", {type: "text", value: index})
        ), 
        React.createElement("label", null, 
          "Email address:", 
          React.createElement("input", {type: "email", value: index})
        ), 
        hasGroups&&React.createElement("label", null, 
          "Group:", 
          React.createElement("input", {type: "text", value: index})
        )
      ))

      
const my_app = React.createElement(App, null)