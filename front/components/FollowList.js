import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {List, Button, Card} from 'antd';
import {StopOutlined} from '@ant-design/icons';

const FollowList = ({header, data}) => {
  const moreButtonStyle = useMemo(() => ({
    textAlign: 'center',
    margin: '10px 0',
  }));
  const listItemStyle = useMemo(() => ({
    margin: '20',
  }));
  const listStyle = useMemo(() => ({
    marginBottom: '20',
  }));
  const listGrid = useMemo(() => ({
    gutter: 4,
    xs: 2,
    md: 6,
  }));
  return (
    <>
      <List
        style={listStyle}
        grid={listGrid}
        size="small"
        header={<div>{header}</div>}
        loadMore={
          <div style={moreButtonStyle}>
            <Button>더 보기</Button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item style={listItemStyle}>
            <Card actions={[<StopOutlined key="stop" />]}>
              <Card.Meta description={item.nickname} />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};
FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
export default FollowList;
