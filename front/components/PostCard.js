import React, {useState, useCallback} from 'react';
import {Card, Button, Avatar, Popover} from 'antd';
import PropTypes from 'prop-types';
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostCard = ({post}) => {
  const id = useSelector(state => state.user.me && state.user.me.id);

  const [liked, setLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev);
  }, []);

  return (
    <CardWrapper key={post.id}>
      <Card
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <Popover
            key="ellipsis"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
        />
      </Card>
    </CardWrapper>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
  }),
};

export default PostCard;
