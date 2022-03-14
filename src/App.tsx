import React from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout';
import Greetings from './components/Greetings';
import Nav from './components/nav/nav';
import Article from './components/article/article';

import airplane from './images/airplane.jpg';
import flower from './images/flower.jpg';
import cafe from './images/cafe.jpg';

function App() {
  return (
    <div>
      <Layout>
      <Nav title1="인기피드" title2="스토어" title3="설정"/>
      <Article title="지그재그" description="인터넷 의류 복합쇼핑몰" link="https://zigzag.kr/" pic_link={flower}></Article>
      <Article title="오늘의 집" description="홈 인테리어 사이트" link="https://www.naver.com/" pic_link={airplane}></Article>
      <Article title="화해" description="화장품, 성분분석까지!" link="https://www.hwahae.co.kr/" pic_link={cafe}></Article>
      </Layout>
    </div>
  );
  }

export default App;
