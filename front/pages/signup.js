import React, {useState, useCallback, useMemo} from 'react';
import styled from 'styled-components';
import {Form, Input, Checkbox, Button} from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password],
  );
  const errorStyle = useMemo(() => ({color: 'red'}), []);
  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  const FormWrapper = styled(Form)`
    padding: 10px;
  `;

  const ButtonDivWrapper = styled.div`
    margintop: 10px;
  `;

  return (
    <AppLayout>
      <FormWrapper onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={errorStyle}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            약관에 동의 합니다.
          </Checkbox>
          {termError && <div style={errorStyle}>약관에 동의하셔야 합니다.</div>}
        </div>
        <ButtonDivWrapper>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </ButtonDivWrapper>
      </FormWrapper>
    </AppLayout>
  );
};

export default Signup;
