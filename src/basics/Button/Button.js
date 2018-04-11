import React, {Component} from 'react';

export class Button extends Component{
  onClick = () => {
    alert('You clicked the button.');
  }
  
  render(){
    return <button type="button" onClick={this.onClick}>{this.props.children}</button>;
  }
}
export default Button;