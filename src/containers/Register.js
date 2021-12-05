import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, userLogin } from '../actions/actions';
import RegisterComponent from '../components/Register/RegisterComponent';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        first: '',
        last: '',
        age: 0,
        description: '',
        password: '',
        todos: [],
      },
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser(event) {
    const { id, value } = event.target;
    this.setState({
      person: {
        ...this.state.person,
        [id]: value,
      },
    });
  }

  handleButtonClick() {
    this.props.addUser(this.state.person);
    this.props.userLogin(this.state.person);
    if (!this.props.history) {
      setTimeout(this.props.onAdressChange, 10);
    } else {
      this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <RegisterComponent
        onFirstNameAdd={this.handleFirstNameAdd}
        onLastNameAdd={this.handleLastNameAdd}
        onAgeAdd={this.handleAgeAdd}
        onDescriptionAdd={this.handleDescriptionAdd}
        onPasswordAdd={this.handlePaswordAdd}
        onButtonClick={this.handleButtonClick}
        onUserAdd={this.handleAddUser}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

const mapDispatchToProps = {
  addUser,
  userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
