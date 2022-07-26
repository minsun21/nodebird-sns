import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const follwingList = [
    { nickname: 'pepsi' },
    { nickname: 'coca' },
    { nickname: 'chilsung' },
  ];
  const follwerList = [
    { nickname: 'mspark' },
    { nickname: 'zero' },
    { nickname: 'cola' },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={follwingList} />
        <FollowList header="팔로워 목록" data={follwerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
