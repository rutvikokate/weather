import React, { Component } from 'react';
import Weather from '../Weather/weather'
import Weather2 from './wea';


export class Auto extends Component {

   

    constructor(props){
        super(props);

        this.state={
            suggestion:[],
            text:'',
            load:true
        };

        this.ontextchange=this.ontextchange.bind(this);
    }

    ontextchange=(e)=>{
        const {items}=this.props;
        const value=e.target.value;
        let suggestion=[];
        console.log(e.target.value);
        if(value.length>0){
            const regex=new RegExp(`^${value}`,'i');
            suggestion=items.sort().filter(v=>regex.test(v));
        }
        this.setState({
            suggestion,
            text:value
        });
    }


    rendersuggestions(){
        const {suggestion}=this.state;
        
        if(suggestion.length===0){
            return null;
        }
        return(
            <ul>
              {suggestion.map((item)=><li onClick={()=>this.suggestionselected(item)}>{item}</li>)}
          </ul>
        );
    }

    suggestionselected(value){
        this.setState(()=>({
            text:value,
            suggestion:[]
        }))
        console.log(text)
    }
  render() {
      const {text}=this.state;
    return (
      <div>
        
          <div className="field has-addons">
              <div className="control">
                <input value={text} onChange={this.ontextchange}  type="text" className="input" />
              </div>
          </div>
         

         {this.rendersuggestions()}
         
        
      </div>
    );
  }
}

export default Auto;
