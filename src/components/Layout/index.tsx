import React from 'react';

import Header from '../header';
import Footer from '../footer';

interface Layout {
  children: React.ReactNode;
}

export default function Layout({ children }: Layout) {
  return (
    <div>
      <Header title="개발Blog"/>
      {children}
      <Footer/>
    </div>
  );
}