import React from 'react';

type HeaderProps = {
    title:string;
};

export default function Header(props: HeaderProps) {
  const {title} = props;
  return (
    <div className="App-header">
      {title}
    </div>
  );
}