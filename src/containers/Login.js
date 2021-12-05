import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/actions';
import LoginForm from '../components/Login/LoginForm';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
    };
  }

  handleUserInput = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  handleLogin = () => {
    this.props.users.forEach(user => {
      if ((user.first === this.state.userName) && (user.password === this.state.password)) {
        this.props.userLogin(user);
        this.props.history.push('/profile');
      }
    });
  }

  render() {
    return (
      <LoginForm
        onLogin={this.handleLogin}
        onUserInput={this.handleUserInput}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

// two kinds of dispatching actions
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({userLogin}, dispatch);
// }
const mapDispatchToProps = {
  userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
