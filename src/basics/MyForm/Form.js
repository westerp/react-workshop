import React from 'react';
import PropTypes from 'prop-types';
import Textarea from './Textarea';
import Dropdown from './Dropdown';
import Range from './Range';

const countries = [
  {value: 'nor', label: 'Norway'},
  {value: 'swe', label: 'Sweden'},
  {value: 'fin', label: 'Finland'},
  {value: 'us'}
];

export class Form extends React.PureComponent{
  state = {
    firstName: '',
    lastName: '',
    dob: '2018-01-01',
    userName: '',
    password: '',
    notes: '',
    familiarWReact: 5,
    country: '',
    isPublic: false
  }

  onTextInputChange = (key, newValue) => {
    this.setState({
      [key]: newValue
    });
  }

  onInternalSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  }

  render(){
    const {
      firstName,
      lastName, 
      dob,
      userName,
      password,
      notes,
      familiarWReact,
      country,
      isPublic
    } = this.state;

    return (
      <form onSubmit={this.onInternalSubmit}>
        <Textarea value={firstName} placeholder="First name" onChange={newValue => this.onTextInputChange('firstName', newValue)}/>



        <br/>
        <Textarea value={lastName} placeholder="Last name" onChange={newValue => this.onTextInputChange('lastName', newValue)}/>



        <br/>
        <Textarea value={dob} type="date" onChange={newValue => this.onTextInputChange('dob', newValue)}/>



        <br/>
        <Textarea value={userName} placeholder="Username" onChange={newValue => this.onTextInputChange('userName', newValue)}/>



        <br/>
        <Textarea value={password} type="password" placeholder="Password" onChange={newValue => this.onTextInputChange('password', newValue)}/>



        <br/>
        <Textarea value={notes} type="textarea" placeholder="Notes" onChange={newValue => this.onTextInputChange('notes', newValue)}/>
        <br/>
        <Dropdown options={countries} value={country} onChange={newValue => this.onTextInputChange('country', newValue)}/>
        <hr/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

  static propTypes = {
  }
}
export default Form;