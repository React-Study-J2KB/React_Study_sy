import React from 'react';

type ArticleProps = {
  title:string;
  description:string;
  link:string;
  pic_link:string;
};

export default function Article(props: ArticleProps) {
  const {title, description, link, pic_link} = props;
  return (
    <div className='App-Article'>
    <img src={pic_link} className='Article-pic'/>
    <div>
      <div><a href={link}>{title}</a></div>
      <div>{description}</div>
    </div>
  </div>
  );
}