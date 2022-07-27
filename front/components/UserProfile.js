import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Card, Avatar, Button} from 'antd';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();

  const style = useMemo(() => ({marginTop: 10, marginLeft: 50}), []);
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="mspark" />
      <Button onClick={onLogOut} style={style}>
        로그아웃
      </Button>
    </Card>
  );
};
UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
export default UserProfile;
