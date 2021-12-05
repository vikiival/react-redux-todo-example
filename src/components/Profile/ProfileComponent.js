import React from 'react';
import LoginNotFound from '../ErrorPages/LoginNotFound';
import ProfileDescription from './ProfileDescription';
import ProfileTable from './ProfileTable';

function ProfileComponent(props) {
  const {
    user,
    onLogout,
    onClear,
    onSynchronize,
    memos,
    onMemoAdd,
  } = props;

  if (user === null) {
    return <LoginNotFound />;
  }

  return (
    <div>
      <ProfileDescription
        user={user}
        onLogout={onLogout}
        onClear={onClear}
        onMemoAdd={onMemoAdd}
      />
      <ProfileTable
        todos={user.todos}
        onSynchronize={onSynchronize}
        memos={memos}
      />
    </div>
  );
}

export default ProfileComponent;
