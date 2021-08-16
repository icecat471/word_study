import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Layout } from 'antd';

import MyHeader from './components/header/MyHeader';

import Home from './components/home/Home';
import WordList from './components/wordList/WordList';
import Memorize from './components/memorize/Memorize';
import Test from './components/test/Test';

import config from './config/config';
const { baseURL } = config;

const { Footer } = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MyHeader></MyHeader>
      <Route exact path={baseURL + "/"} component={Home}></Route>
      <Route path={baseURL + "/list"} component={WordList}></Route>
      <Route path={baseURL + "/memorize"} component={Memorize}></Route>
      <Route path={baseURL + "/test"} component={Test}></Route>
    </BrowserRouter>
  );
}

export default App;
