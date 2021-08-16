import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Nav: React.FC = () => {
    return (
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key={1}><a href="/">한국어공부 for Mizu.</a></Menu.Item>
            <Menu.Item key={2}><a href="/list">単語リスト</a></Menu.Item>
            <Menu.Item key={3}><a href="/memorize">覚えましょう</a></Menu.Item>
            <Menu.Item key={4}><a href="/test">テスト</a></Menu.Item>
          </Menu>
        </Header>
    );
}

export default Nav;