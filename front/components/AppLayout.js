import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import {useSelector} from 'react-redux';

const AppLayout = ({children}) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const style = useMemo(() => ({marginTop: 10}), []);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/profile">
            <a>프로파일</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Input.Search style={style} />
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/minsun21/nodebird-sns"
            target="_blank"
            rel="noreferrer noopener"
          >
            Git Hub
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
