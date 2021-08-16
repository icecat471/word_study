import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Layout } from 'antd';

import Nav from './components/header/Nav';

import Home from './components/home/Home';
import WordList from './components/wordList/WordList';
import Memorize from './components/memorize/Memorize';
import Test from './components/test/Test';

const { Footer } = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Nav></Nav>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/list" component={WordList}></Route>
        <Route exact path="/memorize" component={Memorize}></Route>
        <Route exact path="/test" component={Test}></Route>
        <Footer style={{ textAlign: 'center' }}>Study Korean for Mizu.</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
