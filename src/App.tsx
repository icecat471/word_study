import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import WordList from './components/wordList/WordList';
import Memorize from './components/memorize/Memorize';
import Test from './components/test/Test';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div>
        <Route exact path='/word_study' component={Home}/>
        <Route path='/word_study/list' component={WordList}/>
        <Route path='/word_study/memorize' component={Memorize}/>
        <Route path='/word_study/test' component={Test}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
