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
      <div>
        {this.state.participants.map((c,i)=>(<Participant key={i} index={i} data={c} hasGroups={this.state.hasGroups}/>))}
        <button onClick={_=>this.setState({participants:[].concat(this.state.participants,[''])})}></button>
      </div>
    );
  }
}
//onChange={handleChange(index)('value')}
const Participant = ({index,/*handleChange,*/ data, hasGroups}) => (<form className="participant">
        <label>
          Name:
          <input type="text" value={index}  />
        </label>
        <label>
          Email address:
          <input type="email" value={index}  />
        </label>
        {hasGroups&&<label>
          Group:
          <input type="text" value={index}  />
        </label>}
      </form>)

      
const my_app = <App/>