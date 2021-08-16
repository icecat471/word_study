import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../config/config';
const { baseURL } = config;

const { Header, Content, Footer } = Layout;

const MyHeader: React.FC = () => {
  return (
    <Header style={{paddingLeft:0, paddingRight:0}}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key={1}><Link to={baseURL + "/"}>한국어공부 for Mizu.</Link></Menu.Item>
        <Menu.Item key={2}><Link to={baseURL + "/list"}>単語リスト</Link></Menu.Item>
        <Menu.Item key={3}><Link to={baseURL + "/memorize"}>覚えましょう</Link></Menu.Item>
        <Menu.Item key={4}><Link to={baseURL + "/test"}>テスト</Link></Menu.Item>
      </Menu>
    </Header>
  );
}

export default MyHeader;