import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout, userLogin, updateUser, addMemo } from '../actions/actions';
import ProfileComponent from '../components/Profile/ProfileComponent';
import { clearState } from '../localStorage';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      memos: '',
    };
  }

  componentWillMount() {
    if (this.props.user !== null) {
      this.setState({
        memos: this.props.user.memos,
      });
    }
  }

  handleMemoAdd = () => {
    const { memos } = this.state;
    this.props.addMemo(memos);
  }

  handleLogout = () => {
    this.props.updateUser(this.props.user);
    this.props.userLogout();
    this.props.history.push('/login');
  }

  handleSynchronize = event => {
    const { value } = event.target;
    this.setState({
      memos: value,
    });
  }

  hadleClearState = () => {
    clearState();
    this.props.history.go(0);
  }

  render() {
    return (
      <ProfileComponent
        user={this.props.user}
        onLogout={this.handleLogout}
        onClear={this.hadleClearState}
        onSynchronize={this.handleSynchronize}
        onMemoAdd={this.handleMemoAdd}
        memos={this.state.memos}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser,
  };
}

const mapDispatchToProps = {
  userLogout,
  userLogin,
  updateUser,
  addMemo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
