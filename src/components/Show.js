import React from 'react'
import "../App.css";

export const Show = ({article}) => {
  const {title, snippet,pageid } = article;
        console.log(snippet)
    
         const para = snippet.replace(/<[^>]+>/g, "");
  const a =`https://en.wikipedia.org/?curid=${pageid}`;
  return (
    <div className='search-article'>
      <a href={a} target='_blank' rel='noreferrer'>
        <h2>{title}</h2>
        <p type='html'>{para}</p>
      </a>
    </div>
  );
}
